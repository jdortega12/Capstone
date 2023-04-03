//This file connects to the mongodb with mongoose and starts the node server on port 3001
//To get values from client, begin react app with 'npm start' in client folder

const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
const routesHandler = require("../routes/routes")
const bodyParser = require('body-parser');
const PORT = 3001
const dbConn = require('../model/DbConnection');
const session = require('express-session');
const MongoStore = require('connect-mongo');

//connect to DB
dbConn.connect();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use(session({
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://jdortega:FinanceBoys@cluster0.1ktgc7g.mongodb.net/?retryWrites=true&w=majority",
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // two weeks
  },
  name: "data",
  secret:'anystringoftext',
  saveUninitialized: true,
  resave: true,
}));


app.use('/', routesHandler)



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
