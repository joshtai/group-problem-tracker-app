import React, { Fragment, useState } from 'react';
import { Button, Modal, Form, Navbar, Nav, Row, Col, Container } from 'react-bootstrap';

export interface LoginModalProps {
  show: boolean;
  readonly onClose: () => void;
  readonly onLogin: (arg0: User) => void;
  readonly onRegister: (arg0: User) => void;
}


interface User {
  email?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  password?: string;
}

export default (props: LoginModalProps) => {

  const [action, setAction] = useState<string>("Login");
  
  return (

  <Fragment>
    <Modal show={props.show}>
      <Form onSubmit={(e) => {
        e.preventDefault();

        const emailForm = document.querySelector("#email") as HTMLInputElement;
        const passwordForm = document.querySelector("#password") as HTMLInputElement;
        const usernameForm = document.querySelector("#username") as HTMLInputElement;
        const firstnameForm = document.querySelector("#userfirstname") as HTMLInputElement;
        const lastnameForm = document.querySelector("#userlastname") as HTMLInputElement;


        //const login = (emailForm && passwordForm) ? props.onLogin(emailForm.value, passwordForm.value) : null;
        if(action === "Login") {
          props.onLogin({username: usernameForm.value, password: passwordForm.value})
        }else if (action === "Register") {
          props.onRegister({username: usernameForm.value, 
                            password: passwordForm.value, 
                            email: emailForm.value,
                            firstname: firstnameForm.value,
                            lastname: lastnameForm.value })
        }

      }
      }>
        
        <Navbar>
          <Nav variant="tabs" className="ml-auto" defaultActiveKey="login">
            <Nav.Item>
          <Nav.Link eventKey="login" href="#" onClick={() => {setAction("Login");}}>
            Login
           </Nav.Link>
           </Nav.Item>
           <Nav.Item>
          <Nav.Link href="#" onClick={() => {setAction("Register");}}>
            Register
          </Nav.Link>
          </Nav.Item>
        </Nav>
          </Navbar>
        
        <Modal.Body>
          
        <Form.Group controlId="formBasicUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control id="username" type="text" placeholder="Enter username" />
            </Form.Group>
          

          {action === "Register" && 
            <Container>
            <Form.Group controlId="formBasicEmail">
            <Form.Control id="email" type="email" placeholder="Email address" />
            </Form.Group>
            <Row >
              <Col>
            <Form.Group controlId="formFirstName">
            <Form.Control id="userfirstname" type="text" placeholder="First name" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="formLastName">
            <Form.Control id="userlastname" type="text" placeholder="Last name" />
            </Form.Group>
            </Col>
            </Row>
            </Container>
          }

          


          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control id="password" type="password" placeholder="Password" />
          </Form.Group>

        </Modal.Body>



        <Modal.Footer>
          <Button variant="secondary" onClick={() => {props.onClose();}}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            {action}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  </Fragment>
)
    }