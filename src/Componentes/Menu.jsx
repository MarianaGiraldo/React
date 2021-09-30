import React from "react";
import "./../App.css";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Home from "./Home";
import PruebaForm from "./Form";
import About from "./About";
import Register from "./Register";
import Books from "./Books";
import "./css/Fondo.css";
import Contactus from "./Contactus";

function Menu() {
  return (
    <div className="Parallax">
      <Router basename="/">
        <Navbar
          bg="dark"
          variant="dark"
          expand="md"
          className="w-100 MenuNavegacion"
          style={{ width: "100%" }}>
          <Navbar.Brand
            href="/React/#/"
            className="font-weight-bold"
            style={{ color: "goldenrod", fontSize: "1.8em" }}>
            The Golden Book
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav cla ssName="mr-auto">
              <NavLink
                to="/books"
                style={{
                  padding: "0.5em",
                  color: "gainsboro",
                }}>
                Books
              </NavLink>
              <NavDropdown title="More" className="bg-dark">
                <NavDropdown.Item>
                  <NavLink
                    to="/about"
                    style={{
                      padding: "0.5em",
                      color: "black",
                    }}>
                    About
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/contactus"
                    style={{
                      padding: "0.5em",
                      color: "black",
                    }}>
                    Contact Us
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto">
              <NavLink
                to="/register"
                style={{
                  padding: "0.5em",
                  color: "gainsboro",
                }}>
                Register
              </NavLink>
              <NavLink
                to="/login"
                style={{
                  padding: "0.5em",
                  color: "gainsboro",
                }}>
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login/" component={PruebaForm} />
          <Route exact path="/about/" component={About} />
          <Route exact path="/register/" component={Register} />
          <Route exact path="/books/" component={Books} />
          <Route exact path="/contactus/" component={Contactus} />
        </Switch>
      </Router>
    </div>
  );
}
export default Menu;
