const express = require('express'); //import express
const router = express.Router();
const studentHandler = require('../handlers/handlers');

//const app = express(); //creates a new Express Application
//app.use(express.json());

// Student Actions 
router.post('http://10.0.0.49:3001/createaccount', studentHandler.postCreate);

module.exports = router;