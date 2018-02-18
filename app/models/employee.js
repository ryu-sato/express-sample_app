'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    department: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female', 'other'),
    birth: DataTypes.DATE,
    joined_date: DataTypes.DATE,
    payment: DataTypes.BIGINT,
    note: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true, // cf. https://stackoverflow.com/questions/21114499/how-to-make-sequelize-use-singular-table-names
  });
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};
