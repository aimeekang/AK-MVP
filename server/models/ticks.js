const db = require('../database/db.js');

const getTicks = (req) => {
  const query = `
    WITH t AS (
      SELECT *
      FROM ticks
      WHERE reported = FALSE
      ORDER BY date DESC
    )
    SELECT json_build_object(
      'results', (
        SELECT json_agg(json_build_object(
          'tick_id', t.id,
          'tick_date', to_timestamp(t.date),
          'tick_route', t.route,
          'tick_grade', t.grade,
          'tick_notes', t.notes,
          'average_rating', t.average_rating,
          'style', t.style,
          'lead_style', t.lead_style,
          'route_type', t.route_type,
          'length', t.length,
          'location', t.location,
          'region', t.region,
          'subregion', t.subregion,
          'area', t.area,
          'wall', t.wall,
          'reported', t.reported
        ))
        FROM ticks t
      )
    )
  `;

  return db.query(query);
};

const postTick = (req) => {

};

const updateTick = (req) => {
  const { date, notes, style, lead_style} = req.body;
  console.log('date', date);
  const query = `

  `;

  return db.query(query, []);
};

const flagTick = (req) => {
  const tickID = req.params.tick_id;
  const query = `
    UPDATE ticks
    SET reported = TRUE
    WHERE id = $1
  `;

  return db.query(query, [tickID]);
};

module.exports = {
  getTicks,
  postTick,
  updateTick,
  flagTick
};
