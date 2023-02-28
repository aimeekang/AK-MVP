const db = require('../database/db.js');

const getTicks = (req) => {
  const query = `
    SELECT *
    FROM ticks
    WHERE
  `;
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
