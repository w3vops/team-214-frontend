import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import "./modal.style.css";
import {HashLink as Hash} from 'react-router-hash-link';


const CustomModal = (props) => {

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Select a service
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 modal-service">
                            <Hash to="/service/business#business_form" onClick={props.onHide}
                                  style={{textDecoration: "none"}}>
                                <div className="modal-elements">
                                    <i className="fas fa-briefcase"/>
                                    <h4>Business</h4>
                                </div>
                            </Hash>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 modal-service">
                            <Hash to="/service/investor#investor_form" onClick={props.onHide}
                                  style={{textDecoration: "none"}}>
                                <div className="modal-elements">
                                    <i className="fas fa-user-tie"/>
                                    <h4>Investor</h4>
                                </div>
                            </Hash>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="hi-button">Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
};
export default CustomModal;