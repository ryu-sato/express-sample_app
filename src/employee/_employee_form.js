import React from 'react';
import {
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  CustomInput,
  Button,
  Col } from 'reactstrap';

class FieldGroup extends React.Component {
  render() {
    const id = this.props.id;
    const label = this.props.label;
    const help = this.props.help;
    const name = this.props.name;
    return(
      <FormGroup row>
        <Label for={name} sm={3}>{label}</Label>
        <div>
          <Input {...this.props} />
          {help && <FormText color="muted">{help}</FormText>}
        </div>
      </FormGroup>
    );
  }
}

class EmployeeForm extends React.Component {

  render() {
    const employee = this.props.employee || {};
    const id = (employee.id ? <div>ID: {employee.id}</div> : '');
    const method = this.props.method || "POST";
    const action = employee.id ? `/_api/employees/${employee.id}?_method=${method}` : `/_api/employees?_method=${method}`;
    const cb = this.props.onChangeField;
    return(
      <form action={action} method='post'>
        {id}
        <FieldGroup id="name" label="Name" help="" type="text" name='name' value={employee.name} placeholder="Input Employee's Name" onChange={cb} />
        <FieldGroup id="Department" label="Department" help="" type="text" name='department' value={employee.department} placeholder="" onChange={cb} />
        <FormGroup tag="fieldset" row>
          <Col sm={3}>
            <Label>Gender</Label>
          </Col>
          <Col>
            <FormGroup check inline>
              <Label>
                <Input type="radio" name="gender" defaultValue='male' checked={employee.gender==="male"} onChange={cb} />male
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label>
                <Input type="radio" name="gender" defaultValue='female' checked={employee.gender==="female"}  onChange={cb} />female
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label>
                <Input type="radio" name="gender" defaultValue='other' checked={employee.gender!=="male"&&employee.gender!=="female"} onChange={cb} />other
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FieldGroup id="Birthday" label="Birthday" help="" type="text" name='birth' value={employee.birth} placeholder="Input Employee's Birthday" onChange={cb} />
        <FieldGroup id="Joined Date" label="Joined Date" help="" type="text" name='joined_date' value={employee.joined_date} placeholder="Input Employee's Joined Date" onChange={cb} />
        <FieldGroup id="Payment" label="Payment" help="" type="text" name='payment' value={employee.payment} placeholder="Input Employee's Payment" onChange={cb} />
        <FieldGroup id="Note" label="Note" help="" type="text" name='note' value={employee.note} placeholder="Input Note" onChange={cb} />
        <Button outline type="submit" value="Submit">Submit</Button>
      </form>
    );
  }
}

export default EmployeeForm;
