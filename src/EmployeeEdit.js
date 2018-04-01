var React = require('react');

class EmployeeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };

    this.loadEmployee = this.loadEmployee.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
  }

  loadEmployee() {
    return fetch(`/_api/employee/${this.state.id}`)
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

  onChangeField(e) {
    var employee = this.state.employee;
    employee[e.target.name] = e.target.value;
    this.setState({
      employee: employee
    });
  }

  componentWillMount() {
    this.loadEmployee();
  }

  render() {
    const employee = this.state.employee || {};
    const id = (employee.id ? <div>ID: {employee.id}</div> : '');
    return (
      <form action={'/_api/employees/' + employee.id} method='post'>
        { /* cf. https://qiita.com/ozhaan/items/c1e394226c1d5acb7f0e */ }
        <input name="_method" type="hidden" value="put" readOnly />
        {id}
        <div>Name: <input type='text' name='name' value={employee.name} placeholder="Input Employee's Name" onChange={this.onChangeField} /></div>
        <div>Department: <input type='text' name='department' value={employee.department} placeholder="" onChange={this.onChangeField} /></div>
        <div>
          Gender:
            <input type='radio' name='gender' defaultValue='male' checked={employee.gender==="male"} onChange={this.onChangeField} /> male
            <input type='radio' name='gender' defaultValue='female' checked={employee.gender==="female"}  onChange={this.onChangeField} /> female
            <input type='radio' name='gender' defaultValue='other' checked={employee.gender!=="male"&&employee.gender!=="female"} onChange={this.onChangeField} /> other
        </div>
        <div>Birthday: <input type='text' name='birth' value={employee.birth} placeholder="Input Employee's Birthday" onChange={this.onChangeField} /></div>
        <div>Joined Date: <input type='text' name='joined_date' value={employee.joined_date} placeholder="Input Employee's Joined Date" onChange={this.onChangeField} /></div>
        <div>Payment: <input type='text' name='payment' value={employee.payment} placeholder="Input Employee's Payment" onChange={this.onChangeField} /></div>
        <div>Note: <input type='text' name='note' value={employee.note} placeholder="Input Note" onChange={this.onChangeField} /></div>
        <div><input type='submit' value='Submit' readOnly /></div>
      </form>
    );
  }
}

module.exports = EmployeeEdit;
