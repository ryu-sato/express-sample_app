var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* Employee */
router.get('/', controllers.employee_controller.index);
router.get('/new', controllers.employee_controller.generate);
router.post('/new', controllers.employee_controller.postGenerate);

module.exports = router;
