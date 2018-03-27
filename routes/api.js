var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* API of controll employees */
router.get('/employee/', controllers.api_employee_controller.index);
router.get('/employee/:id(\\d+)', controllers.api_employee_controller.show);
router.post('/employee/', controllers.api_employee_controller.create);
router.post('/employee/:id(\\d+)', controllers.api_employee_controller.update);
router.delete('/employee/:id(\\d+)', controllers.api_employee_controller.destroy);

module.exports = router;
