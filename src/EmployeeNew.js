var React = require('react');

class EmployeeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };
  }

  componentWillMount() {
  }

  render() {
    const employee = this.state.employee || {};
    const id = (employee.id ? <div>ID: {employee.id}</div> : '');
    return (
      <form action={'/_edit/employees/' + employee.id} method='post'>
        { /* cf. https://qiita.com/ozhaan/items/c1e394226c1d5acb7f0e */ }
        <input name="_method" type="hidden" value="put" readOnly />
        {id}
        <div>Name: <input type='text' name='name' defaultValue={employee.name} placeholder="Input Employee's Name" /></div>
        <div>Department: <input type='text' name='department' defaultValue={employee.department} placeholder="" /></div>
        <div>
          Gender:
            <input type='radio' name='gender' defaultValue='male' checked={employee.gender==="male"} readOnly /> male
            <input type='radio' name='gender' defaultValue='female' checked={employee.gender==="female"} readOnly /> female
            <input type='radio' name='gender' defaultValue='other' checked={employee.gender!=="male"&&employee.gender!=="female"} readOnly /> other
        </div>
        <div>Birthday: <input type='text' name='birth' defaultValue={employee.birth} placeholder="Input Employee's Birthday" /></div>
        <div>Joined Date: <input type='text' name='joined_date' defaultValue={employee.joined_date} placeholder="Input Employee's Joined Date" /></div>
        <div>Payment: <input type='text' name='payment' defaultValue={employee.payment} placeholder="Input Employee's Payment" /></div>
        <div>Note: <input type='text' name='note' defaultValue={employee.note} placeholder="Input Note" /></div>
        <div><input type='submit' value='Submit' readOnly /></div>
      </form>
    );
  }
}

module.exports = EmployeeNew;
