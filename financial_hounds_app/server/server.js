//This file connects to the mongodb with mongoose and starts the node server on port 3001
//To get values from client, begin react app with 'npm start' in client folder

const express = require("express");
const mongoose = require("mongoose");
const routesHandler = require("../routes/routes")
const bodyParser = require('body-parser');
const PORT = 3001


//connect to DB
mongoose.connect("mongodb+srv://jdortega:FinanceBoys@cluster0.1ktgc7g.mongodb.net/?retryWrites=true&w=majority")
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/', routesHandler)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
