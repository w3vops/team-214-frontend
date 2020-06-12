import React, {useState} from "react";
import "./customButton.style.css";
import {HashLink as Hash} from 'react-router-hash-link';
import CustomModal from "../modal/modal";
import {Link} from "react-router-dom";

const CustomButton = ({text, link, button_type, anchor_link, type, disabled, clickFunction, clickable, nav_button}) => {
    const [modalShow, setModalShow] = useState(false);

    const openModal = () => {
        if (nav_button){
            clickFunction();
        }
        setModalShow(true);
    };
    const hideModal = () => {
        setModalShow(false);
    };

    if (button_type === "linkPage"){
        return (
            <Link to={link}><button className="hi-button">
                {text}
            </button></Link>
        )
    }
    else if (button_type === "hashLink") {
        return (<Hash to={link}>
            <button className="hi-button">
                {text}
            </button>
        </Hash>)
    } else if (button_type === "samePage") {
        return (<a href={anchor_link}>
            <button className="hi-button">{text}</button>
        </a>)
    } else if (button_type === "regular") {
        return (<button className="hi-button" type={type}>{text}</button>)
    } else if (button_type === "regular" && clickable === true){
        return (<button className="hi-button" type={type} onClick={clickFunction}>{text}</button>)
    }
    else if (button_type === "regular2") {
        return (<button className="hi-button regular2" type={type} disabled={disabled}>{text}</button>)
    } else if (button_type === "openModal") {
        return (
            <>
                <button className="hi-button" type={type} onClick={openModal}>{text}</button>
                <CustomModal show={modalShow} onHide={hideModal}/>
            </>
        )
    } else if (button_type === "spanOpenModal") {
        return (
            <>
                <span className="make-gold" style={{cursor: "pointer"}} onClick={openModal}>{text}</span>
                <CustomModal show={modalShow} onHide={hideModal}/>
            </>
        )
    }
};
export default CustomButton;