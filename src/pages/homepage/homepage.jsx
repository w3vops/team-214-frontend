import React from "react";
import {Helmet} from "react-helmet";
import "./homepage.style.css";
import Carousel from "../../components/carousel/carousel";
import Blackgirl from "../../assets/images/blackgirl.jpg";
import Andela from "../../assets/images/andela.png";
import CustomButton from "../../components/button/customButton";
import {Link} from "react-router-dom";
import NavBar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";

const Homepage = () => {

    return (
        <>
            <Helmet>
                <title>nvesta - linking small and medium scale businesses to investors</title>
                <meta name="description" content=""/>
            </Helmet>

            <div id="home">
                <NavBar/>
                <Carousel/>
                <section className="about-section aos">
                    <h2>How do I benefit?</h2>
                    <p>nvesta is a bridge between small scale business and investors. We offer businesses the platform
                        to find investors easier and investors the opportunity to select the best businesses to invest
                        in</p>
                    <Link to="/about" className="link">Learn more <i
                        className="fas fa-arrow-right animated infinite slow rubberBand"/></Link>
                </section>
                <section className="steps">
                    <h1>Access a service by 3 easy steps</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-ld-4 aos" data-aos="fade-in">
                                <i className="fa fa-check-circle" aria-hidden="true"/>
                                <h3>Select a service</h3>
                                <p>Getting access to a service is as easy as selecting of the service for the services
                                    tab in the navigation bar or using the <CustomButton text='get a service'
                                                                                         button_type="spanOpenModal"/> button
                                </p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-ld-4 aos" data-aos="fade-in"
                                 data-aos-delay="500">
                                <i className="fa fa-check-circle" aria-hidden="true"/>
                                <h3>Sign in</h3>
                                <p>Fill a <CustomButton text='form' button_type="spanOpenModal"/> located at the bottom
                                    of the page of
                                    the
                                    service selected, making
                                    sure to provide accurate details</p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-ld-4 aos" data-aos="fade-in"
                                 data-aos-delay="1000">
                                <i className="fa fa-check-circle" aria-hidden="true"/>
                                <h3>Have access</h3>
                                <p>Once you are all signed up with your accurate details, you have access to investors
                                    or
                                    businesses</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sponsors" className="aos">
                    <h1>Our Partners</h1>
                    <img src={Andela} alt="Andela logo" data-aos="slide-left" />
                </section>
                <section className="about-details">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <i className="fas fa-clock"/>
                                <h3>Save time</h3>
                                <p>Businesses get access to investors quicker. Nvesta enables businesses to avoid
                                    wasting time going from occasion to occasion searching for investors. Investors also
                                    get access to a large array of innovative businesses to invest in.</p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <i className="fas fa-star"/>
                                <h3>Quality and quick service</h3>
                                <p>
                                    Get quality and the best services on nvesta. By ensuring all businesses and
                                    investors enter correct details and doing thorough background checks, nvesta ensures
                                    only the best of services are rendered to businesses and investors alike.
                                </p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <i className="fas fa-laptop"/>
                                <h3>Convenience</h3>
                                <p>Nvesta ensures you only experience transactions at your own convenience. We make sure
                                    all businesses and investors alike experience seamless transactions on our
                                    platform</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-jumbotron" style={{backgroundImage: `url(${Blackgirl})`}}>
                    <div className="my-jumbotron-div aos">
                        <div data-aos="slide-up">
                            <h1>Want to improve your business?</h1>
                            <CustomButton text="Get started" button_type="openModal"/>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
};

export default Homepage;