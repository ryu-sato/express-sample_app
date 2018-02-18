var Employee = require('../models/employee')(sequelize, DataTypes);

exports.index = function(err, req, res, next) {
  var employees = Employee.all();
  if (err) next(err);
  res.render('views/employee/index', {employees : employees});
};

exports.generate = function(req, res, next) {
  // [TODO] fix me;
}

exports.postGenerate = function(req, res, next) {
  // [TODO] fix me;
}
