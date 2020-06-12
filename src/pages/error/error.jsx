import React from "react";
import "./error.style.css";
import CustomButton from "../../components/button/customButton";

const Error = () => {
    return(
        <div className="error">
            <div className="error-overlay">
                <h1 className="error-header">Oh... Something went wrong</h1>
                <h5 className="error-sub">We can't seem to find the page you are looking for</h5>
                <CustomButton button_type="linkPage" link="/" text="Take me home"/>
            </div>
        </div>
    )
}
export default Error;