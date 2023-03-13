const express = require('express'); //import express
const router = express.Router();
const studentHandler = require('../handlers/handlers');

//const app = express(); //creates a new Express Application
//app.use(express.json());

// Student Actions 
router.post('http://localhost:3001/createaccount', studentHandler.postCreate);

router.post('http://localhost:3001/login', studentHandler.postLogin)

module.exports = router;