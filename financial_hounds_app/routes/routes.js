const express = require('express'); //import express
const router = express.Router();
const handlers = require('../handlers/handlers');

// Student Actions 
// URL is server URL
router.post('/createaccount', handlers.postCreate);

router.post('/login', handlers.postLogin);

router.post('/createadmin', handlers.postCreateAdmin);

router.post('/adminlogin', handlers.postAdminLogin);

router.post('/createbudget', handlers.postCreateBudget);

router.post('/createemergency', handlers.postCreateEmergency);

router.post('/createretirement', handlers.postCreateRetirement);

router.post('/createforum', handlers.postCreateForum);

router.post('/updatestudents', handlers.postUpdateStudents);

router.post('/updatecomments', handlers.postUpdateComments);

router.get('/viewbudget', handlers.getBudget);

router.get('/viewemergency', handlers.getEmergency);

router.get('/viewretirement', handlers.getRetirement);

router.get('/viewstudents', handlers.getStudents);

router.get('/logout', handlers.getLogout);

module.exports = router;