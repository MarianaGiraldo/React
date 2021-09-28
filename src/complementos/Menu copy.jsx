import React from 'react'
import './../App.css';
import {HashRouter as Router, Switch,Route} from "react-router-dom";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import Home from './Home'
import PruebaForm from './Form'
import About from './About'
import Users from './Users'
import Products from './Products'
import './Fondo.css'
import Contactus from './Contactus'

function Menu (){
    return(
        <div className="Contenedor">
      <Router>
        <Navbar bg="light" expand="md" className="w-100 MenuNavegacion" style={{ width: '100%' }} >
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/login/">Login</Nav.Link>
                <Nav.Link href="/about/">About</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/users/">Users</NavDropdown.Item>
                    <NavDropdown.Item href="/products/">Products</NavDropdown.Item>
                    <NavDropdown.Item href="/contactus/">Contact us</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/login/" component={PruebaForm} />
         <Route exact path="/about/" component={About} />
         <Route exact path="/users/" component={Users} />
         <Route exact path="/products/" component={Products} />
         <Route exact path="/contactus/" component={Contactus} />
        </Switch>
      
    </Router>
  
      </div>
  );

} 
export default Menu