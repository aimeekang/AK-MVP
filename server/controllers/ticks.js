const models = require('../models');

const getTicks = (req, res) => {
  models.ticks
    .getTicks(req, res)
    .then((result) => res.status(200).send(result))
    .catch((err) => console.error(err));
};

const postTick = (req, res) => {

};

const updateTick = (req, res) => {

};

module.exports = {
  getTicks,
  postTick,
  updateTick
};
