require('bootstrap/dist/css/bootstrap.min.css');
var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

var React = require('react');

class EmployeeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };

    this.loadEmployee = this.loadEmployee.bind(this);
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

  componentWillMount() {
    this.loadEmployee();
  }

  render() {
    const attributes_array = ["name", "department", "gender", "birth", "joined_date", "payment", "note"].map((attr) =>
      { return {
        name: attr,
        val: this.state.employee[attr] ? this.state.employee[attr].toString() : '...loading'
      } }
    );
    return (
      <ListGroup>
        {attributes_array.reduce((accumulator, attr, idx) => {
          return accumulator.concat([
            <ListGroupItem key={idx} header={attr.name}>{attr.val}</ListGroupItem >,
          ]);
        },[])}
      </ListGroup>
    );
  }
}

module.exports = EmployeeDetail;
