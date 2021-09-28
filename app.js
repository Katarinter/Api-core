// FileName: index.js
// Import express
const express = require('express');
// Initialize the app
const app = express(),
  http = require("http"),
  server = http.createServer(app),
  mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

// Setup server port
const port = process.env.PORT || 3000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hola'));
// Launch app to listen to specified port
app.listen(port, () => {
  console.log(`Running RestHub on port  ${port}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tvshows');
