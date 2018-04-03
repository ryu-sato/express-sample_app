var React = require('react');

class EmployeeForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const employee = this.props.employee || {};
    const id = (employee.id ? <div>ID: {employee.id}</div> : '');
    const method = this.props.method || "POST";
    const action = employee.id ? `/_api/employees/${employee.id}?_method=${method}` : `/_api/employees?_method=${method}`;
    const cb = this.props.onChangeField;
    return(
      <form action={action} method='post'>
        {id}
        <div>Name: <input type='text' name='name' value={employee.name} placeholder="Input Employee's Name" onChange={cb} /></div>
        <div>Department: <input type='text' name='department' value={employee.department} placeholder="" onChange={cb} /></div>
        <div>
          Gender:
            <input type='radio' name='gender' defaultValue='male' checked={employee.gender==="male"} onChange={cb} /> male
            <input type='radio' name='gender' defaultValue='female' checked={employee.gender==="female"}  onChange={cb} /> female
            <input type='radio' name='gender' defaultValue='other' checked={employee.gender!=="male"&&employee.gender!=="female"} onChange={cb} /> other
        </div>
        <div>Birthday: <input type='text' name='birth' value={employee.birth} placeholder="Input Employee's Birthday" onChange={cb} /></div>
        <div>Joined Date: <input type='text' name='joined_date' value={employee.joined_date} placeholder="Input Employee's Joined Date" onChange={cb} /></div>
        <div>Payment: <input type='text' name='payment' value={employee.payment} placeholder="Input Employee's Payment" onChange={cb} /></div>
        <div>Note: <input type='text' name='note' value={employee.note} placeholder="Input Note" onChange={cb} /></div>
        <div><input type='submit' value='Submit' readOnly /></div>
      </form>
    );
  }
}

module.exports = EmployeeForm;
