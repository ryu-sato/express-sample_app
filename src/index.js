var React = require('react');
var ReactDOM = require('react-dom');

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        test death
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <EmployeeList />,
  document.getElementById('root')
);
