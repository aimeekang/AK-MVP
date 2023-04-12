const router = require('express').Router();
const controllers = require('./controllers');

// TICKS ROUTES
router.get('/rr/ticks', controllers.ticks.getTicks);
router.post('/rr/ticks', controllers.ticks.postTick);
router.put('/rr/ticks/:tick_id/update', controllers.ticks.updateTick);
router.put('/rr/ticks/:tick_id/flag', controllers.ticks.flagTick);

// TODOS ROUTES

module.exports = router;
