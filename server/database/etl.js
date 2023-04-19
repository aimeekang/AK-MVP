require('dotenv').config();
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'routesandratings',
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});

client.connect()
  .then(() => console.info('Connected to Postgres'))
  .catch((err) => console.error(`Connection error: ${err}`));

const directoryPath = '/Users/aimeekang/HackReactor/MVP/AK-MVP/server/database/data';
const files = fs.readdirSync(directoryPath);
const jsonFiles = files.filter((file) => path.extname(file).toLowerCase() === '.json');

const insertions = [];

jsonFiles.forEach((file) => {
  const filePath = path.join(directoryPath, file);
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // insert area to database
  const areaQuery = client.query(`
    INSERT INTO areas (name, path_tokens, description, total_climbs, lng, lat, aggregate_grade, aggregate_discipline)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`, [
    jsonData.area_name,
    jsonData.pathTokens,
    jsonData.content.description,
    jsonData.totalClimbs,
    jsonData.metadata.lnglat.coordinates[0],
    jsonData.metadata.lnglat.coordinates[1],
    [jsonData.aggregate.byGrade],
    JSON.stringify(jsonData.aggregate.byDiscipline)
  ])
    .then((result) => {
      const areaId = result.rows[0].id;

      // insert climbs into database
      const climbInsertions = jsonData.climbs.map((climb) => client.query(`
          INSERT INTO climbs (name, yds, fa, type, safety, description, protection, location, left_right_index, area_id)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, [
        climb.name,
        climb.yds,
        climb.fa,
        JSON.stringify(climb.type),
        climb.safety,
        climb.content.description,
        climb.content.protection,
        climb.content.location,
        climb.metadata.left_right_index,
        areaId
      ])
        .then(() => console.info(`Inserted climb '${climb.name}' into the database`))
        .catch((err) => console.error(`Error inserting climb data: ${err}`)));

      return Promise.all(climbInsertions)
        .then(() => {
          console.info(`Inserted area '${jsonData.area_name}' into the database with ${jsonData.climbs.length} climbs`);
        })
        .catch((err) => console.error(`Error inserting climb data: ${err}`));
    })
    .catch((err) => console.error(`Error inserting area data: ${err}`));

  insertions.push(areaQuery);
});

Promise.all(insertions)
  .then(() => {
    client.end();
    console.info('Closed database connection');
  })
  .catch((err) => console.error(`Error during insertion: ${err}`));
