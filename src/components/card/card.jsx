import React from "react";
import "./card.style.css";
import CustomButton from "../button/customButton";

const Card = ({image, title, content, link}) => {
    return (
        <div className="the-card">
            <div className="card-image" style={{backgroundImage: `url(${image})`}}/>
            <div className="card-text">
                <h3 className="card-title">{title}</h3>
                <p className="card-content">{content}</p>
                <CustomButton text="See more" link={link} button_type="linkPage"/>
            </div>
        </div>
    )
}
export default Card;