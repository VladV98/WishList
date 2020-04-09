const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDirectory = require('../utilities/path');
const wishesController = require('../controllers/wishes');
const router = express.Router();
//const products = [];


router.get('/add-wish', wishesController.getAddWishesPage);

router.post('/add-wish', wishesController.postAddWishes);

module.exports = router;
//exports.router = router;
//exports.products = products;