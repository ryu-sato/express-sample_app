var models = require('../models');

exports.index = function(req, res, next) {
  models.Employee.all().then(employees => {
    res.render('employee/index', {employees : employees});
  });
};

exports.generate = function(req, res, next) {
  // [TODO] fix me;
}

exports.postGenerate = function(req, res, next) {
  // [TODO] fix me;
}
