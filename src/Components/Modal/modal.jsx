import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import style from '../portafolio/portafolio.css'
function ModalComponent({estilo,informacion,titulo,evidence,source}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(source)
  return (
    <>
      <button className={estilo} onClick={handleShow}>
      <i className="icon-info work-button-icon"></i>
      </button>

      <Modal size='lg' show={show} onHide={handleClose}         aria-labelledby="example-modal-sizes-title-lg"
>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        {evidence === "" ?  (
  <>
  <p>{informacion}</p>
  <CCarousel
  interval={null}
  controls
  >
    {source.map((element, index) => {
      if (element.endsWith(".mp4")) {
        return (
          <CCarouselItem key={index}>
            <video src={element} controls style={{width:"100%"}} />
          </CCarouselItem>
        );
      } else {
        return (
          <CCarouselItem key={index}>
            <img src={element} alt="" />
          </CCarouselItem>
        );
      }
    })}
  </CCarousel>
</>
        )
        : (
            <>
            {informacion}
            <a href={evidence} target="_blank" rel="noopener noreferrer">Evidencia</a>
             </>
        )}
        </Modal.Body>
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