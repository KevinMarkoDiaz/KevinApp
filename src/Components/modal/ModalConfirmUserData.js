import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormConfimDataUser from "../sale/FormConfimDataUser";

function MyVerticallyCenteredModal(props) {

  const user = window.localStorage.getItem('user');
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirma tus datos para el envio
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          user
            ? <FormConfimDataUser />
            : <Link to="/auth/login"><Button>Login</Button></Link>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const ModalConfirmUserData = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="success"
        className='m-1'
        onClick={() => setModalShow(true)}
      >
        Terminar compra
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}