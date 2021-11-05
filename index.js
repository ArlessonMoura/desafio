const express = require('express');
const bodyParser = require('body-parser');
const routerBasics = require('./routers/basicsRouter');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});

app.use('/basics', routerBasics);
