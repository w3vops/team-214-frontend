import React from "react";
import "./carousel.style.css";
import Business from "../../assets/images/business.jpg";
import Investor from "../../assets/images/investor.jpg";
import CustomButton from "../button/customButton";

const Carousel = () => {
    return (
        <div id="main-carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#main-carousel" data-slide-to="0" className="active"/>
                <li data-target="#main-carousel" data-slide-to="1"/>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active" style={{backgroundImage: `url(${Business})`}}>
                    <div>
                        <h1>Get an <span className="golden">nvesta</span></h1>
                        <h5>Get access to the best investors in the<br/> business who
                            are eager to grow with you</h5>
                        <CustomButton text="Book service" link="/service/business#business_form" button_type="hashLink"/>
                    </div>
                </div>
                <div className="carousel-item " style={{backgroundImage: `url(${Investor})`}}>
                    <div>
                        <h1>Invest in the best</h1>
                        <h5>We offer an array of the best businesses<br/> for you to choose from as an investor
                        </h5>
                        <CustomButton text="Sign up" link="/service/investor#investor_form"
                                      button_type="hashLink"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#main-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#main-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
};
export default Carousel;
