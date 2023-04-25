const db = require('../database/db.js');

const getClimbs = (req) => {
  const searchTerm = req.body.term;
  const query = `
    WITH c AS (
      SELECT *
      FROM climbs
      WHERE LOWER(name) LIKE '%${searchTerm}%'
    ),
    a AS (
      SELECT *
      FROM areas
      WHERE LOWER(name) LIKE '%${searchTerm}%'
    )
    SELECT json_build_object(
      'routes', (
        SELECT json_agg(json_build_object(
          'name', c.name
        ))
        FROM c
      ),
      'areas', (
        SELECT json_agg(json_build_object(
          'name', a.name
        ))
        FROM a
      )
    )
  `;

  return db.query(query);
};

module.exports = {
  getClimbs
};
