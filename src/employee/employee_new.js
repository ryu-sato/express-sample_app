import React from 'react';
import EmployeeForm from './_employee_form';

class EmployeeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };

    this.handleChangeField = this.handleChangeField.bind(this);
  }

  componentWillMount() {
  }

  handleChangeField(e) {
    let employee = this.state.employee;
    employee[e.target.name] = e.target.value;
    this.setState({
      employee: employee
    });
  }

  render() {
    return (
      <EmployeeForm employee={this.state.employee} method="POST" onChangeField={this.handleChangeField} />
    );
  }
}

export default EmployeeNew;
