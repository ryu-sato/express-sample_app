var models = require('../models');

/**
 * show all employee list
 */
exports.index = function(req, res, next) {
  models.Employee.all().then(employees => {
    res.render('employee/index', {employees : employees});
  });
};

/**
 * show employee details
 */
exports.show = function(req, res, next) {
  models.Employee.findById(req.params.id).then(employee => {
    res.render('employee/show', {employee : employee});
  });
};

/**
 * show form to create employee
 */
exports.new = function(req, res, next) {
  // [TODO] FIX ME
  res.render('employee/new');
};

/**
 * create employee
 */
exports.create = function(req, res, next) {
  var properties = ["name", "department", "gender", "birth", "joined_date", "payment", "note"];
  var new_values = {};
  properties.forEach(function(prop) {
    new_values[prop] = req.body[prop];
  });
  models.Employee.create(
    new_values
  ).then(new_employee => {
    // [TODO] 作成した旨をメッセージ表示する
    res.redirect(302, '/employees');
  });
};

/**
 * edit employee
 */
exports.edit = function(req, res, next) {
  models.Employee.findById(req.params.id).then(employee => {
    res.render('employee/edit', {employee : employee});
  });
};

/**
 * update employee
 */
exports.update = function(req, res, next) {
  models.Employee.findById(req.params.id).then(employee => {
    var properties = ["name", "department", "gender", "birth", "joined_date", "payment", "note"];
    var update_values = {};
    properties.forEach(function(prop){
      update_values[prop] = req.body[prop];
    });
    employee.update(update_values);
    res.redirect(302, "/employees/" + employee.id);
  });
};

/**
 * destroy employee
 */
exports.destroy = function(req, res, next) {
  models.Employee.destroy(req.params.id).then(employee => {
    // [TODO] FIX ME
    res.redirect(302, "/");
  });
};
