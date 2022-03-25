import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FaInfoCircle } from 'react-icons/fa';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {
            props.message
          }
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide }>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const ModalComponent = ({ title, message }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button size="sm" variant="link" onClick={() => setModalShow(true)}>
        <FaInfoCircle />
        {title}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        message={message}
        title={title}
      />
    </>
  );
}