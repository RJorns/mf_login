import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .nav-bar {
    background-color: #696a6a;
    color: white;
  }

  .nav-logo:hover {
    color: #62cb31;
  }

  .navbar-brand {
    color: white;
  }
`;


export const NavigationBar = () => {
    return (
      <Styles>
        <div>
            <Navbar expand="lg" className="nav-bar">
                <Navbar.Brand className="nav-logo" href="/">Freight Mule</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Item><Nav.Link className="nav-item" href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="nav-item" href="../signup">Signup</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="nav-item" href="../login">Login</Nav.Link></Nav.Item>
                </Navbar.Collapse>
            </Navbar>
        </div>
      </Styles>
    )
}
