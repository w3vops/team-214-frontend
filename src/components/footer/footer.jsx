import React from "react";
import "./footer.style.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <h1>Contact us</h1>
            <div className="details">
                <div>
                    <h5>Location <i className="fas fa-map-marker"/></h5>
                    <p>Ghana</p>
                </div>
                <div className="telephone">
                    <h5>Telephone Numbers <i className="fas fa-phone"/></h5>
                    <p>+233 2* **** ***</p>
                </div>
                <div className="social-media">
                    <a href="" target="_blank"
                       rel="noopener noreferrer"><i className="fab fa-facebook-f"/></a>
                    <a href="" target="_blank"
                       rel="noopener noreferrer"><i className="fab fa-instagram"/></a>
                    <a href="" target="_blank"
                       rel="noopener noreferrer"><i className="fab fa-twitter"/></a>
                </div>
            </div>
            <div className="footer-terms">
                <p>Copyright &copy; 2020. All rights reserved | <span style={{color: "var(--gold)"}}>nvesta</span>
                </p>
                <Link to="/terms" className="link terms-conditions">Terms and conditions</Link>
            </div>
        </footer>
    )
};
export default Footer;