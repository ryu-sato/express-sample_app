var React = require('react');
var DefaultLayout = require('../layouts/default');

class EmployeeIndex extends React.Component {
  render() {
    const attributes_array = ["name", "department", "gender", "birth", "joined_date", "payment", "note"].map((attr) =>
      { return { name: attr, val: this.props.employee[attr].toString()} }
    );
    return (
      <DefaultLayout title={this.props.title}>
        <dl>
          {attributes_array.reduce((accumulator, attr, idx) => {
            return accumulator.concat([
              <dt key={`attrname-${idx}`}>{attr.name}</dt>,
              <dd key={`attrval-${idx}`}>{attr.val}</dd>
            ]);
          },[])}
        </dl>
      </DefaultLayout>
    );
  }
}

module.exports = EmployeeIndex;
