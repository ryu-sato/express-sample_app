import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

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
    const attributes_array = !this.state.employee ? null
      : ["name", "department", "gender", "birth", "joined_date", "payment", "note"].map((attr) =>
          { return {
            name: attr,
            val: this.state.employee[attr] ? this.state.employee[attr] : "-"
          } }
        );
    const attributes_dom = attributes_array === null ? "... loading"
      : <ListGroup>
          {attributes_array.reduce((accumulator, attr, idx) => {
            return accumulator.concat([
              <ListGroupItem className="d-flex justify-content-between align-items-center" key={idx} header={attr.name}>{attr.val} <Badge pill>{attr.name}</Badge></ListGroupItem>,
            ]);
          },[])}
        </ListGroup>

    return (attributes_dom);
  }
}

export default EmployeeDetail;
