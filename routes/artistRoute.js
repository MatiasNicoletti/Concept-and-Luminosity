const express = require('express');
const artistController = require('../controllers/artistController');
const router = express.Router();

router.route('/artists')
    .get(artistController.getAll)
    .post(artistController.create);

module.exports = router;