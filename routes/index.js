var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/', controllers.api_employee_controller.index);

module.exports = router;
