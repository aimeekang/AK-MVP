const models = require('../models');

const getClimbs = (req, res) => {
  models.climbs
    .getClimbs(req)
    .then((result) => res.status(200).send(result.rows[0].json_build_object))
    .catch((err) => console.error(err));
};

module.exports = {
  getClimbs
};
