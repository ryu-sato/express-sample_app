var React = require('react');

var FormGroup = require('react-bootstrap/lib/FormGroup');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var FormControl = require('react-bootstrap/lib/FormControl');
var HelpBlock = require('react-bootstrap/lib/HelpBlock');
var Radio = require('react-bootstrap/lib/Radio');
var Button = require('react-bootstrap/lib/Button');

class EmployeeForm extends React.Component {

  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }

    const employee = this.props.employee || {};
    const id = (employee.id ? <div>ID: {employee.id}</div> : '');
    const method = this.props.method || "POST";
    const action = employee.id ? `/_api/employees/${employee.id}?_method=${method}` : `/_api/employees?_method=${method}`;
    const cb = this.props.onChangeField;
    return(
      <form action={action} method='post'>
        {id}
        <FieldGroup id="name" type="text" label="Name" name='name' value={employee.name} placeholder="Input Employee's Name" onChange={cb} />
        <FieldGroup id="Department" type="text" label="Department" name='department' value={employee.department} placeholder="" onChange={cb} />
        <FormGroup controlId="Gender">
          <ControlLabel>Gender</ControlLabel>
          <Radio name="gender" inline defaultValue='male' checked={employee.gender==="male"} onChange={cb}>male</Radio>
          <Radio name="gender" inline defaultValue='female' checked={employee.gender==="female"}  onChange={cb}>female</Radio>
          <Radio name="gender" inline defaultValue='other' checked={employee.gender!=="male"&&employee.gender!=="female"} onChange={cb}>other</Radio>
        </FormGroup>
        <FieldGroup id="Birthday" type="text" label="Birthday" name='birth' value={employee.birth} placeholder="Input Employee's Birthday" onChange={cb} />
        <FieldGroup id="Joined Date" type="text" label="Joined Date" name='joined_date' value={employee.joined_date} placeholder="Input Employee's Joined Date" onChange={cb} />
        <FieldGroup id="Payment" type="text" label="Payment" name='payment' value={employee.payment} placeholder="Input Employee's Payment" onChange={cb} />
        <FieldGroup id="Note" type="text" label="Note" name='note' value={employee.note} placeholder="Input Note" onChange={cb} />
        <Button type="submit" value="Submit">Submit</Button>
      </form>
    );
  }
}

module.exports = EmployeeForm;
