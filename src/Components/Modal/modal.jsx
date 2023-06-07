import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import style from '../portafolio/portafolio.css'
function ModalComponent({estilo,informacion,titulo}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={estilo} onClick={handleShow}>
      <i className="icon-info work-button-icon"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{informacion}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;