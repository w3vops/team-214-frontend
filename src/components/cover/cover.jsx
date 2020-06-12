import React from "react";
import "./cover.style.css";
import CustomButton from "../button/customButton";

const Cover = ({image, text, button, link}) => {
    return(
        <div className="cover" style={{backgroundImage: `url(${image})`}}>
            <div className="overlay">
                <h1>{text}</h1>
                {
                    button ? <CustomButton text="Sign up" anchor_link={link} button_type="samePage"/> : console.log()
                }
            </div>
        </div>
    )
}
export default Cover;