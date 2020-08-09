import React, { Fragment } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

export interface NavbarProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onHome: () => void;
}
/**
 * The default Navbar for the application
 * @param props - object implementing NavbarProps interface describing
 *                current "state" of application
 * @return React Fragment with Navbar
 */
export default (props: NavbarProps) => (
  <Fragment>
    <Container fluid>
      <Navbar bg="light">
        {
          // When we decide on an "official" title we need to update the below
          // or we could pass as a prop...
        }
        <Navbar.Brand href="#" >
          Leetcode Thing
        </Navbar.Brand>
        {
          // Below is where links should be registered on the Navbar. Beware
          // of making any changes before testing the mobile view.
          //
          // Currently they are set up to take a function to handle any transitions
          // of state of the global app (ie, rendering a different view). If we add
          // React-Router or anything like that in the future, they can be updated.
        }
        <Nav className="ml-auto">
          <Nav.Link href="#" onClick={() => props.onHome()}>
            Home
           </Nav.Link>
          <Nav.Link href="#" onClick={() => props.onLogin()}>
            {props.isLoggedIn ? "Logout" : "Login"}
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container> 
  </Fragment>
)
