import React, {useState} from "react";
import "./service.style.css";
import {serviceList} from "../../utils/service.content";
import Cover from "../../components/cover/cover";
import CustomButton from "../../components/button/customButton";
import {Link} from "react-router-dom";
import {
    errorObject,
    validateAddress,
    validateContact,
    validateMail,
    validateName,
    validateService
} from "../../utils/validator";
import SuccessModal from "../../components/modal/successModal";
import {Helmet} from "react-helmet";
import {dateFormatter} from "../../utils/dateFormatter";
import NavBar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import Error from "../error/error";


const Service = ({match}) => {
    const [isInactive, setIsInactive] = useState(true);
    const [error, setError] = useState({
        fnameError: '',
        lnameError: '',
        mailError: '',
        contError: '',
        addressError: '',
        descriptionError: '',
        cityError: '',
    });

    const service_name = match.params.service_name;
    const serviceInfo = serviceList[service_name];

    const [userDetails, setUserDetails] = useState({
        service_type: service_name,
        fname: '',
        lname: '',
        mail: '',
        cont: '',
        address: '',
        city: '',
        date_booked: dateFormatter(new Date()),
        timestamp: new Date().toString()
    });

    const [modalShow, setModalShow] = useState(false);

    const openModal = () => {
        setModalShow(true);
    };
    const hideModal = () => {
        setModalShow(false);
        formReset();
        setIsInactive(true);
    };


    const formReset = () => {
        let eachInput;
        const formId = document.querySelector(`#${service_name}_form`);
        const inputFields = document.querySelectorAll('i');
        formId.reset();
        for (eachInput of inputFields) {
            eachInput.classList.remove('fa-check-circle');
        }
    };

    const errorSetter = () => {
        setError({...error, [errorObject.errorName]: errorObject.errorMessage});
    };

    const validateUserName = (event) => {
        validateName(event);
        errorSetter();
    };
    const validateUserMail = (event) => {
        validateMail(event);
        errorSetter();
    };
    const validateUserContact = (event) => {
        validateContact(event);
        errorSetter();
    };
    const validateUserAddress = (event) => {
        validateAddress(event);
        errorSetter();
    };
    const validateUserDescription = (event) => {
      validateAddress(event);
      errorSetter()
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateService(event);
        errorSetter();
        if (isValid) {
        }
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
            service_type: service_name
        });
        if (event.target.name === 'fname') {
            validateUserName(event);
        } else if (event.target.name === 'lname') {
            validateUserName(event);
        } else if (event.target.name === 'mail') {
            validateUserMail(event);
        } else if (event.target.name === 'cont') {
            validateUserContact(event);
        } else if (event.target.name === 'address') {
            validateUserAddress(event);
        }else if(event.target.name === 'description'){
            validateUserDescription(event);
        } else if (event.target.name === 'city') {
            validateUserName(event);
        }
    };

    const toggleCheck = () => {
        setIsInactive(!isInactive);
    };

    return serviceInfo === undefined ? <Error/> :
        <>
            <Helmet>
                <title>nvesta - linking small and medium scale businesses to investors</title>
                <meta name="description" content= {serviceInfo.about} />
            </Helmet>
            <NavBar/>
            <div className="service">
                <Cover image={require(`../../assets/images/${serviceInfo.image}.jpg`)} text={serviceInfo.cover_text}
                       button={true} link={`#${service_name}_form`}/>
                <div className="service-body">
                    <form className="form service-form" id={`${service_name}_form`} onSubmit={handleSubmit} noValidate>
                        <SuccessModal show={modalShow} onHide={hideModal}
                                      maintext="Booking made successfully"
                                      subtext="You will be contacted by a member of our team"/>
                        <h2>
                            Sign up as <span className="golden">{service_name}</span>
                        </h2>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">First name</label>
                                <div className="input-field">
                                    <input type="text" className="form-control" id="firstname"
                                           placeholder="First name" name="fname" onBlur={validateUserName}
                                           onChange={handleChange}/>
                                    <i className="fas" id="fname"/>
                                </div>
                                <p className="service-error">{error.fnameError}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Last name</label>
                                <div className="input-field">
                                    <input type="text" className="form-control" id="inputPassword4"
                                           placeholder="Last name" name="lname" onBlur={validateUserName}
                                           onChange={handleChange}/>
                                    <i className="fas" id="lname"/>
                                </div>
                                <p className="service-error">{error.lnameError}</p>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <div className="input-field">
                                    <input type="email" className="form-control" id="email"
                                           placeholder="email@gmail.com" name="mail"
                                           onBlur={validateUserMail} onChange={handleChange}/>
                                    <i className="fas" id="mail"/>
                                </div>
                                <p className="service-error">{error.mailError}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="contact">Contact</label>
                                <div className="input-field">
                                    <input type="tel" className="form-control" id="contact"
                                           placeholder="+233 233 233 233" name="cont" onBlur={validateUserContact}
                                           onChange={handleChange}/>
                                    <i className="fas" id="cont"/>
                                </div>
                                <p className="service-error">{error.contError}</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <div className="input-field">
                                <input type="text" className="form-control" id="inputAddress"
                                       placeholder="1234 Main St" name="address" onBlur={validateUserAddress}
                                       onChange={handleChange}/>
                                <i className="fas" id="address"/>
                            </div>
                            <p className="service-error">{error.addressError}</p>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <div className="input-field">
                                    <input type="text" className="form-control" id="inputCity" name="city"
                                           onBlur={validateUserName} onChange={handleChange}/>
                                    <i className="fas" id="city"/>
                                </div>
                                <p className="service-error">{error.cityError}</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" onClick={toggleCheck}/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    I have read and accept the <Link className="link" to="/terms">
                                    <span className="golden">terms and conditions</span></Link>
                                </label>
                            </div>
                        </div>
                        <CustomButton type="submit" text="Submit request" button_type="regular2" disabled={isInactive}/>
                    </form>
                    <section className="service-sect-one">
                        <h2>
                            What you have to do to get started
                        </h2>
                        <p data-aos="fade-up">{serviceInfo.about}</p>
                    </section>
                    <section className="service-sect-two">
                        <h2>
                            What you get
                        </h2>
                        <div className="text-container">
                            {serviceInfo.what_you_get.map((item, i) => {
                                return (
                                    <div className="list" key={i}><i className="fa fa-check-circle"
                                                                     aria-hidden="true"/>
                                        <p>{item}</p></div>)
                            })}
                        </div>
                    </section>
                    <section>
                        <h2>What quality do we offer?</h2>
                        <div className="text-container">
                            {serviceInfo.quality.map((item, i) => {
                                return (<div className="list" key={i} data-aos="fade-up"><i className="fa fa-star"
                                                                                            aria-hidden="true"/>
                                    <p>{item}</p></div>)
                            })}
                        </div>
                    </section>
                    <section>
                        <h2>Why we do what we do</h2>
                        <div className="text-container">
                            {serviceInfo.why.map((item, i) => {
                                return (
                                    <div className="list" key={i}><i className="fa fa-check-circle" aria-hidden="true"/>
                                        <p>{item}</p></div>)
                            })}
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
};


export default Service;
