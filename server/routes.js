const router = require('express').Router();
const controllers = require('./controllers');

// TICKS ROUTES
router.get('/rr/ticks', controllers.ticks.getTicks);
router.post('/rr/ticks', controllers.ticks.postTick);
router.put('/rr/ticks', controllers.ticks.updateTick);

// TODOS ROUTES

module.exports = router;
