const express = require('express'); //import express
const router = express.Router();
const handlers = require('../handlers/handlers');

// Student Actions 
// URL is server URL
router.post('/createaccount', handlers.postCreate);

router.post('/login', handlers.postLogin)

router.post('/createbudget', handlers.postCreateBudget)

router.post('/createemergency', handlers.postCreateEmergency)

router.get('/viewbudget', handlers.getBudget)

router.get('/viewemergency', handlers.getEmergency)

router.get('/logout', handlers.getLogout)

module.exports = router;