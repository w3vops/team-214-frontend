import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import "./successModal.style.css";


const SuccessModal = (props) => {

    const onCloseButton = () => {
        props.onHide();
        props.resetSuccess(false);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title"
        >
            <Modal.Body className="success-modal-body">
                <div className="body-text">
                    <h2>{props.maintext}</h2>
                    <p className="make-gold">{props.subtext}</p>
                </div>
                <div className="success-checkmark">
                    <div className="check-icon">
                        <span className="icon-line line-tip"/>
                        <span className="icon-line line-long"/>
                        <div className="icon-circle"/>
                        <div className="icon-fix"/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onCloseButton} className="hi-button">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}




export default SuccessModal;
