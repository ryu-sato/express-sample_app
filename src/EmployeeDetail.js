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
      <dl>
        {attributes_array.reduce((accumulator, attr, idx) => {
          return accumulator.concat([
            <dt key={`attrname-${idx}`}>{attr.name}</dt>,
            <dd key={`attrval-${idx}`}>{attr.val}</dd>
          ]);
        },[])}
      </dl>
    );
  }
}

module.exports = EmployeeDetail;
