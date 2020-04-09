const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');
const adminData = require('./admin');
const wishesController = require('../controllers/wishes');
const router = express.Router();

router.get('/', wishesController.getWishes);

module.exports = router;