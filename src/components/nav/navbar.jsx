import React, {useEffect, useState} from "react";
import "./navbar.style.css";
import {Link, NavLink} from "react-router-dom";
import CustomButton from "../button/customButton";


const NavBar = () => {
    const [dropdownOn, setDropdownOn] = useState(false);

    const toggler = () => {
        setDropdownOn(!dropdownOn);
    };

    useEffect(() => {
        const collapseTarget = document.querySelector('#collapse_target');
        const icon = document.querySelector('#icon');
        if (!dropdownOn) {
            collapseTarget.classList.remove('show');
            icon.classList.add('collapsed');
        } else {
            collapseTarget.classList.add('show');
            icon.classList.remove('collapsed');
        }
    }, [dropdownOn]);

    return (
        <nav className="navbar navbar-expand-lg nav-background fixed-top">
            <Link to="/" className="navbar-brand hi-logo"><span>nvesta</span></Link>
            <div className="navbar-toggler" data-toggle="collapse" data-target="#collapse_target"
                 onClick={toggler} id="icon">
                <div className="menu-line1"/>
                <div className="middle-line"/>
                <div className="menu-line1"/>
            </div>
            <div className="collapse navbar-collapse" id="collapse_target">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="active-nav" to="/" exact={true} className="nav-link"
                                 onClick={toggler}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active-nav" to="/about" className="nav-link"
                                 onClick={toggler}>About</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" data-toggle="dropdown"
                              data-target="service_target">Services</span>
                        <div className="dropdown-menu" aria-labelledby="service_target">
                            <Link to="/service/business" className="dropdown-item" onClick={toggler}>Business owner</Link>
                            <div className="dropdown-divider"/>
                            <Link to="/service/investor" className="dropdown-item"
                                  onClick={toggler}>Investor</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active-nav" to="/enquiry" className="nav-link"
                                 onClick={toggler}>Enquiry</NavLink>
                    </li>
                    <li className="nav-item">
                        <CustomButton text="Get started" button_type="openModal" clickFunction={toggler}
                                      nav_button={true}/>
                    </li>

                </ul>
            </div>
        </nav>
    )
};


export default NavBar;
