const express = require('express');
const cors = require('cors');
const apiRouter = require('./rutas');
const {
  errorLog,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/errorHandler');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});

apiRouter(app);

app.use(errorLog);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);
