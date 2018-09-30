import React from 'react';
import EmployeeForm from './_employee_form';

class EmployeeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };

    this.loadEmployee = this.loadEmployee.bind(this);
    this.handleChangeField = this.handleChangeField.bind(this);
  }

  loadEmployee() {
    return fetch(`/_api/employees/${this.state.id}`)
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          employee: responseJson.employee,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  handleChangeField(e) {
    let employee = this.state.employee;
    employee[e.target.name] = e.target.value;
    this.setState({
      employee: employee
    });
  }

  componentWillMount() {
    this.loadEmployee();
  }

  render() {
    return (
      <EmployeeForm employee={this.state.employee} method="PUT" onChangeField={this.handleChangeField} />
    );
  }
}

export default EmployeeEdit;
