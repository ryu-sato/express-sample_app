var React = require('react');
var DefaultLayout = require('../layouts/default');

class EmployeeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilterText: null,
      nameFilterTextRE: /.*/,
    }
    this.setNameFilterText = this.setNameFilterText.bind(this);
    this.handleFilteringNameIsChanged = this.handleFilteringNameIsChanged.bind(this);
    console.log('EmploeeIndex constructor');
  }

  setNameFilterText(text) {
    const RE = new RegExp(text);
    this.setState({
      nameFilterText: text,
      nameFilterTextRE: RE,
    });
  }

  handleFilteringNameIsChanged(element) {
    console.log("handleFilteringNameIsChanged is invoked");
    this.setNameFilterText(element.target.value);
  }

  render() {
    //const employees = this.props.employees.filter(e => { console.log('this.state.nameFilterTextRE.test: ' + this.state.nameFilterTextRE.test(e.name) ? 'true' : 'false'); return this.state.nameFilterTextRE.test(e.name) });
    const employees = this.props.employees;
    const employees_index = employees.map((employee) =>
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.department}</td>
        <td>{employee.gender}</td>
        <td>
          <a href={`/employees/${employee.id}/edit`}><button>Edit</button></a>
        </td>
      </tr>
    );
    return (
      <DefaultLayout title={this.props.title}>
        <form action="#search">
          <label>Filtered by name:</label>
          <input type="text" name="keyword"
            placeholder="input name"
            value={this.state.nameFilterText}
            onChange={this.handleFilteringNameIsChanged} />
        </form>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
          {employees_index}
        </table>
      </DefaultLayout>
    );
  }
}

module.exports = EmployeeIndex;
