require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const db = require('./database/db.js');

const path = require('path');

const app = express();

const router = require('./routes.js');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', router);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Server listening at PORT:${process.env.PORT}`);
  }
});
