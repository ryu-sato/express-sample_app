import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';

var React = require('react');
var ReactDOM = require('react-dom');
var rrd = require('react-router-dom');
var BrowserRouter = rrd.BrowserRouter;
var Route = rrd.Route;
var Link = rrd.Link;
var EmployeeList = require('./employee/employee_list');
var EmployeeDetail = require('./employee/employee_detail');
var EmployeeNew = require('./employee/employee_new');
var EmployeeEdit = require('./employee/employee_edit');

class ExpressSampleApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <span>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                ExpressSampleApp
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem><Link to="/">Home</Link></NavItem>
              <NavItem><Link to="/employees">employee</Link></NavItem>
            </Nav>
          </Navbar>
          <Grid>
            <Route exact path="/" component={Home} />
            <Route exact path="/employees" component={EmployeeList} />
            <Route exact path='/employees/:id([0-9]+)' component={EmployeeDetail} />
            <Route exact path="/employees/new" component={EmployeeNew} />
            <Route exact path="/employees/:id([0-9]+)/edit" component={EmployeeEdit} />
            <Link to="/employees/new">New</Link>
          </Grid>
        </span>
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


// DOMのレンダリング処理
//   see. https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(
  <ExpressSampleApp />,            // Appをレンダリングする
  document.getElementById('root')  // id=root要素に対してレンダリングする
);
