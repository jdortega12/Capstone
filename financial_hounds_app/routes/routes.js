const express = require('express'); //import express
const router = express.Router();
const studentHandler = require('../handlers/handlers');

// Student Actions 
// URL is server URL
router.post('/createaccount', studentHandler.postCreate);

router.post('/login', studentHandler.postLogin)

router.post('/logout', studentHandler.postLogout)

module.exports = router;