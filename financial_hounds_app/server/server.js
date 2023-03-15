//This file connects to the mongodb with mongoose and starts the node server on port 3001
//To get values from client, begin react app with 'npm start' in client folder

const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
const routesHandler = require("../routes/routes")
const bodyParser = require('body-parser');
const PORT = 3001
const dbConn = require('../model/DbConnection');

//connect to DB
dbConn.connect();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/', routesHandler)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
