const db = require('../database/db.js');

const getTicks = (req) => {
  const query = `
    WITH t AS (
      SELECT *
      FROM ticks
      WHERE reported = FALSE
      ORDER BY date DESC
      LIMIT 100
    )
    SELECT json_build_object(
      'results', (
        SELECT json_agg(json_build_object(
          'tick_id', t.id,
          'tick_date', t.date,
          'tick_grade', t.grade,
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
        )) FROM t
      )
    )
  `;

  return db.query(query);
};

const postTick = (req) => {

};

const updateTick = (req) => {

};

module.exports = {
  getTicks,
  postTick,
  updateTick
};
