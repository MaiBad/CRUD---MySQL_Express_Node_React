const express = require('express');
const alumnosRouter = require('./alumnosRouter');

function apiRouter(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/alumnos', alumnosRouter);
}

module.exports = apiRouter;
