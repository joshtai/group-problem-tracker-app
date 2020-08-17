import React, { Fragment } from 'react';
import {Button, Modal, Form } from 'react-bootstrap';

export interface LoginModalProps {
    show: boolean;
    onCancel: () => void;
    onLogin: (arg0: string, arg1: string) => void;
}


export default (props: LoginModalProps) => (

    <Fragment>
      <Modal show={props.show}>
      <Form onSubmit={(e) => {e.preventDefault(); 

                              const emailForm = document.querySelector("#email") as HTMLInputElement;
                              const passwordForm = document.querySelector("#password") as HTMLInputElement;

                              const login = (emailForm && passwordForm) ? props.onLogin( emailForm.value, passwordForm.value) : null;
                            
                            
                            }
                    }>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

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
          <Button variant="secondary" onClick={() => props.onCancel()}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
)