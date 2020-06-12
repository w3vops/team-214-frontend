import React from "react";
import "./loader.style.css";

const Loader = ({fullLoader}) => {
    return fullLoader ? <div className="loader-overlay">
        <i className="fas fa-circle-notch fa-spin"/>
    </div> : <div className="loader-center"><i className="fas fa-circle-notch fa-spin"/></div>
}
export default Loader;