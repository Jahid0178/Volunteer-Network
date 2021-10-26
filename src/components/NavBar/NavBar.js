import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/donation">
              Donation
            </NavLink>
            <NavLink className="nav-link" to="/events">
              Events
            </NavLink>
            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
            <Button className="btn btn-secondary ms-2">Admin</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
