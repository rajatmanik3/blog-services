var express = require('express');
var router = express.Router();
var blogController = require('../controllers/blogController.js');
var validator = require('../middleware/validator');

/*
 * POST
 */
router.post('/list', validator.validate('blogs'), blogController.list);

module.exports = router;
