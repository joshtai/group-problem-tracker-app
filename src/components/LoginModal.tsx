import React, { Fragment } from 'react';
import {Button, Modal } from 'react-bootstrap';

export interface LoginModalProps {
    show: boolean;
    onCancel: () => void;
    onLogin: () => void;
}


export default (props: LoginModalProps) => (

    <Fragment>
      <Modal show={props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello world!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.onCancel()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => props.onLogin()}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
)