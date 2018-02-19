var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* Employee */
router.get('/', controllers.employee_controller.index);
router.get('/:id(\\d+)', controllers.employee_controller.show);
router.get('/new', controllers.employee_controller.new);
router.post('/', controllers.employee_controller.create);
router.get('/:id(\\d+)/edit', controllers.employee_controller.edit);
router.post('/:id(\\d+)', controllers.employee_controller.update);
router.delete('/:id(\\d+)', controllers.employee_controller.destroy);

module.exports = router;
