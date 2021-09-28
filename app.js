const express = require('express');
// const mongoose = require('mongoose');
const mainRoute = require('./routes/mainRoute');

const app = express();
const port = 3000;

app.use(express.urlencoded({
  extended: false,
}));
app.use(express.json());
app.use('/', mainRoute);

app.listen(port, () => {
  console.log(`Node server running on http://localhost:${port}`);
});
