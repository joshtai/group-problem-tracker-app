import React, { Fragment } from 'react';
import {Button, Modal } from 'react-bootstrap';

export interface LoginModalProps {
    show: boolean;
}


export default (props: LoginModalProps) => (

    <Fragment>
      <Modal show="true">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello world!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
)