const models = require('../models');

const getTicks = (req, res) => {
  models.ticks
    .getTicks(req)
    .then((result) => res.status(200).send(result.rows[0].json_build_object))
    .catch((err) => console.error(err));
};

const postTick = (req, res) => {

};

const updateTick = (req, res) => {
  models.ticks
    .updateTick(req)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(500).send(err));
};

const flagTick = (req, res) => {
  models.ticks
    .flagTick(req)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(500).send(err));
};

module.exports = {
  getTicks,
  postTick,
  updateTick,
  flagTick
};
