var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Employee */
router.get('/employees', controllers.employee_controller.index);
router.get('/employees/new', controllers.employee_controller.generate);
router.post('/employees/new', controllers.employee_controller.postGenerate);

module.exports = router;
