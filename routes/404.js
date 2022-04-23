const express = require('express');

const router = express.Router();

const pageNotFound_Controller = require('../controllers/404');


router.get('/', pageNotFound_Controller.pageNotFound);

module.exports = router;