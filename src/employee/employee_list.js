import { Table, Button } from 'reactstrap';

import React from 'react';
import { Link } from 'react-router-dom';

// Employee一覧レンダリング用コンポーネント
class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };

    this.loadEmployeeList = this.loadEmployeeList.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  loadEmployeeList() {
    return fetch("/_api/employees")
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          employees: responseJson.employees,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  handleDeleteButton(employee_id) {
    return fetch(`/_api/employees/${employee_id}`, {
      method: 'DELETE'
    }).then(response => {
      const newEmployees = this.state.employees.filter(e => e.id !== employee_id);
      this.setState({ employees: newEmployees });
    });
  }

  componentWillMount() {
    this.loadEmployeeList();
  }

  render() {
    const employee_list = this.state.employees.map((employee) =>
      <tr key={`EmployeeList-${employee.id}`}>
        <td>
          <Link to={`/employees/${employee.id}`}>{employee.id}</Link>
        </td>
        <td>{employee.name}</td>
        <td>{employee.department}</td>
        <td>{employee.gender}</td>
        <td>
          <Link to={`/employees/${employee.id}/edit`}><Button outline>Edit</Button></Link>
          <Button outline color="danger" onClick={() => this.handleDeleteButton(employee.id)}>Delete</Button>
        </td>
      </tr>
    );

    return(
      <Table responsive>
        <thead
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee_list}
        </tbody>
      </Table>
    );
  }
}

export default EmployeeList;
