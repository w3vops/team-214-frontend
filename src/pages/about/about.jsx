import React from "react";
import Cover from "../../components/cover/cover";
import AboutPic from "../../assets/images/analytics.jpg";
import "./about.style.css";
import Business2 from "../../assets/images/business2.jpg";
import Inverstor2 from "../../assets/images/investor2.jpg";
import {Helmet} from "react-helmet";
import NavBar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";


const About = () => {
    return (
        <>
            <Helmet>
                <title>nvesta - linking small and medium scale businesses to investors</title>
                <meta name="description" content="We offer a convenient and easy way to have access to cleaning aid,
                 shopping, house-helps and farm produce from the comfort of your home"/>
            </Helmet>
            <NavBar/>
            <Cover image={AboutPic} text="We are here to help"/>
            <div className="about">
                <section className="section-one">
                    <h2>Who are we?</h2>
                    <p data-aos="fade-up">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea esse fugit ipsam unde?
                        Doloribus hic impedit iste laboriosam minus nobis, nostrum perspiciatis, quos rem repellat
                        tempora totam ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                        deleniti distinctio dolore esse expedita natus obcaecati soluta totam? A assumenda deserunt enim
                        impedit ipsum labore magni nesciunt officia sequi tempora.
                    </p>
                </section>
                <section className="addition">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <h2>Our Vision</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam
                                    blanditiis cupiditate impedit laborum magni natus necessitatibus nostrum
                                    perferendis.</p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <h2 className='mission'>Our Mission</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam
                                    blanditiis cupiditate impedit laborum magni natus necessitatibus nostrum
                                    perferendis.</p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 belief">
                                <h2>Core Beliefs</h2>
                                <p>Persistence</p>
                                <p>Creativity</p>
                                <p>Excellence</p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-two">
                    <h2>Our services</h2>
                    <p>We connect businesses and investors</p>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-lg-6 service-card" data-aos="zoom-in">
                                <div className="service-image">
                                    <img src={Business2} alt="business"/>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-6 service-card" data-aos="zoom-in"
                                 data-aos-delay="1000">
                                <h2>Aid to small scale businesses</h2>
                                <p className="left">We offer small and medium scale enterprises to gain easy access to investors.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus eos fugit
                                    labore nam! Accusantium ad, amet autem debitis illum in molestias mollitia nobis
                                    nulla perspiciatis provident tempore totam, veniam.
                                </p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-6 service-card order-12 order-md-1" data-aos="zoom-in">
                                <h2>An investor's aid</h2>
                                <p>We offer investors gain easy access to businesses they actually want.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus eos fugit
                                    labore nam! Accusantium ad, amet autem debitis illum in molestias mollitia nobis
                                    nulla perspiciatis provident tempore totam, veniam.
                                </p>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-6 service-card order-1 order-md-12" data-aos="zoom-in"
                                 data-aos-delay="1000">
                                <div className="service-image">
                                    <img src={Inverstor2} alt="business"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-three">
                    <h2>Our inspiration</h2>
                    <p data-aos="fade-up">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam dolore ea eius
                        esse exercitationem fugiat iusto nulla obcaecati pariatur quae sequi sint vel! Accusantium
                        adipisci beatae esse magni voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad aliquid aut, dignissimos dolore enim ipsum, maxime neque non, omnis reiciendis repellat
                        tempora ut velit! Aliquid asperiores doloremque in libero vitae?
                    </p>
                </section>
            </div>
            <Footer/>
        </>
    )
};

export default About;