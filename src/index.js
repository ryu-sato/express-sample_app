var React = require('react');
var ReactDOM = require('react-dom');
var rrd = require('react-router-dom');
var BrowserRouter = rrd.BrowserRouter;
var Route = rrd.Route;
var Link = rrd.Link;

class ExpressSampleApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/employee">employee</Link></li>
          </ul>
          <Route path="/" component={Home} />
          <Route path="/employee" component={EmployeeList} />
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

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
    return fetch("/_api/employee")
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
  <ExpressSampleApp />, // EmployeeListコンポーネントをレンダリングする
  document.getElementById('root')                             // id=root要素に対してレンダリングする
);
