require('bootstrap/dist/css/bootstrap.min.css');
var Table = require('react-bootstrap/lib/Table');
var Button = require('react-bootstrap/lib/Button');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');

var React = require('react');
var rrd = require('react-router-dom');
var Link = rrd.Link;

// Employee一覧レンダリング用コンポーネント
class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };

    this.loadEmployeeList = this.loadEmployeeList.bind(this);
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
          <form action={'/_api/employees/' + employee.id + '?_method=DELETE'} method='post'>
            <FormGroup>
              <Link to={`/employees/${employee.id}/edit`}><Button>Edit</Button></Link>
              <FormControl name="id" type="hidden" value={employee.id} readOnly />
              <Button bsStyle="danger" type="submit" value="Delete">Delete</Button>
            </FormGroup>
          </form>
        </td>
      </tr>
    );

    return(
      <Table responsive>
        <thead>
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

module.exports = EmployeeList;
