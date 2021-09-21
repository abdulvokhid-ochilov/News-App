import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = function () {
  return (
    <div>
      <Navbar className="yellotail">
        <LinkContainer to="/">
          <Navbar.Brand>Daily News</Navbar.Brand>
        </LinkContainer>
      </Navbar>
      <Nav>
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;
