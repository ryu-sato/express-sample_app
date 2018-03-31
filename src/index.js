var React = require('react');
var ReactDOM = require('react-dom');

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
    return fetch(this.props.url)
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
    const employee_list = this.state.employees.map((e) => <li>{e.name}</li>);
    return(
      <ul>
        {employee_list}
      </ul>
    );
  }
}


// DOMのレンダリング処理
//   see. https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(
  <EmployeeList url="/_api/employee" />, // EmployeeListコンポーネントをレンダリングする
  document.getElementById('root')                             // id=root要素に対してレンダリングする
);
