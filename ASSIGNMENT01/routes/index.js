const express = require('express');
const router = express.Router();
const controller = require('../controllers/portfolioController');

router.get('/profile', controller.getProfile);
router.get('/about', controller.getAbout);
router.get('/projects', controller.getProjects);
router.post('/contact', controller.postContact);

module.exports = router;
