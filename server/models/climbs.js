const db = require('../database/db.js');

const getClimbs = (req) => {
  const searchTerm = req.body.term;
  const query = `
    WITH a AS (
      SELECT *
      FROM areas
      WHERE LOWER(name) LIKE '%${searchTerm}%'
    ),
    c AS (
      SELECT *
      FROM climbs
      WHERE LOWER(name) LIKE '%${searchTerm}%'
    )
    SELECT json_build_object(
      'areas', (
        SELECT json_agg(json_build_object(
          'id', a.id,
          'name', a.name,
          'path_tokens', a.path_tokens,
          'total_climbs', a.total_climbs
        ))
        FROM a
      ),
      'routes', (
        SELECT json_agg(json_build_object(
          'id', c.id,
          'name', c.name,
          'yds', c.yds,
          'fa', c.fa,
          'type', c.type,
          'path_tokens', b.path_tokens
        ))
        FROM c
        LEFT JOIN areas b on c.area_id = b.id
      )
    )
  `;

  return db.query(query);
};

module.exports = {
  getClimbs
};
