import React, { Fragment, useState } from 'react';
import { Button, Modal, Form, Navbar, Nav } from 'react-bootstrap';

export interface LoginModalProps {
  readonly onClose: () => void;
  readonly onLogin: (arg0: string, arg1: string) => void;
}


export default (props: LoginModalProps) => {
  const [show, setShow] = useState<boolean>(true);

  const [action, setAction] = useState<string>("Login");
  
  return (

  <Fragment>
    <Modal show={show}>
      <Form onSubmit={(e) => {
        e.preventDefault();

        const emailForm = document.querySelector("#email") as HTMLInputElement;
        const passwordForm = document.querySelector("#password") as HTMLInputElement;

        const login = (emailForm && passwordForm) ? props.onLogin(emailForm.value, passwordForm.value) : null;


      }
      }>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control id="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control id="password" type="password" placeholder="Password" />
          </Form.Group>

        </Modal.Body>



        <Modal.Footer>
          <Button variant="secondary" onClick={() => {props.onClose(); setShow(false);}}>
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