/*const express = require('express');
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
*/

const express = require('express'); // importa express

// Rutas creadas
const mainRoute = require('./routes/mainRoute');

const app = express(); // Inicia la app

app.use(express.urlencoded({ // conf para aceptar post request con distintas codificaciones
  // true allows for rich objects to be encoded into the URL-encoded format allowing for a JSON-like
  extended: false,
}));
app.use(express.json()); // only parses json

// Rutas usadas
app.use('/', mainRoute);

module.exports = app;