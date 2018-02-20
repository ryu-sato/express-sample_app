var React = require('react');
var DefaultLayout = require('../layouts/default');

class EmployeeIndex extends React.Component {
  render() {
    const employees_index = this.props.employees.map((employee) =>
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.department}</td>
        <td>{employee.gender}</td>
      </tr>
    );
    return (
      <DefaultLayout title={this.props.title}>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Gender</th>
          </tr>
          {employees_index}
        </table>
      </DefaultLayout>
    );
  }
}

module.exports = EmployeeIndex;
