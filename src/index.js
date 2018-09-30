import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
  Row,
  Col } from 'reactstrap';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import EmployeeList from './employee/employee_list';
import EmployeeDetail from './employee/employee_detail';
import EmployeeNew from './employee/employee_new';
import EmployeeEdit from './employee/employee_edit';

class ExpressSampleApp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <BrowserRouter>
        <span>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              ExpressSampleApp
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem><NavLink href="/">Home</NavLink></NavItem>
                <NavItem><NavLink href="/employees">employee</NavLink></NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Container>
            <Row>
              <Col xs="7"><Route exact path="/" component={Home} /></Col>
              <Col xs="7"><Route exact path="/employees" component={EmployeeList} /></Col>
              <Col xs="7"><Route exact path='/employees/:id([0-9]+)' component={EmployeeDetail} /></Col>
              <Col xs="7"><Route exact path="/employees/new" component={EmployeeNew} /></Col>
              <Col xs="7"><Route exact path="/employees/:id([0-9]+)/edit" component={EmployeeEdit} /></Col>
            </Row>
            <Row>
              <Col><Link to="/employees/new"><Button>New</Button></Link></Col>
            </Row>
          </Container>
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
