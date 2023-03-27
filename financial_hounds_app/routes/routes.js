const express = require('express'); //import express
const router = express.Router();
const studentHandler = require('../handlers/handlers');

// Student Actions 
// URL is server URL
router.post('/createaccount', studentHandler.postCreate);

router.post('/login', studentHandler.postLogin)

router.get('/logout', studentHandler.getLogout)

module.exports = router;