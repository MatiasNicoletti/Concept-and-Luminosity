const express = require('express');
const router = express.Router();
const devController = require('../controllers/devController');

router.route('/dev')
    .delete(devController.deleteData);

router.route('/dev/artists')
    .post(devController.pushArtists);

router.route('/dev/products')
    .post(devController.pushProducts);

module.exports = router;