var React = require('react');
var EmployeeForm = require('./layouts/form');

class EmployeeIndex extends React.Component {
  render() {
    return (
      <EmployeeForm employee={this.props.employee}>
      </EmployeeForm>
    );
  }
}

module.exports = EmployeeIndex;
