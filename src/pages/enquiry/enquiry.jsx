import React, {useState} from "react";
import Question from "../../assets/images/enquiry.jpg";
import {errorObject, validateAddress, validateEnquiry, validateMail, validateName} from "../../utils/validator";
import CustomButton from "../../components/button/customButton";
import "./enquiry.style.css";
import SuccessModal from "../../components/modal/successModal";
import {Helmet} from "react-helmet";
import {dateFormatter} from "../../utils/dateFormatter";
import NavBar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";

const Enquiry = () => {
    const [enquiry, setEnquiry] = useState(
        {
            eFNameError: '',
            eLNameError: '',
            eMailError: '',
            eMessageError: '',
        }
    );


    const [enquirerDetails, setEnquirerDetails] = useState({
        eFName: '',
        eLName: '',
        eMail: '',
        eMessage: '',
        date_enquired: dateFormatter(new Date()),
        timestamp: new Date().toString()
    });

    const [modalShow, setModalShow] = useState(false);

    const openModal = () => {
        setModalShow(true);
    };

    const hideModal = () => {
        setModalShow(false);
        formReset();
    };


    const formReset = () => {
        let eachInput;
        const formId = document.querySelector('#enquiry_form');
        const inputFields = document.querySelectorAll('i');
        formId.reset();
        for (eachInput of inputFields) {
            eachInput.classList.remove('fa-check-circle');
        }
    };

    const errorSetter = () => {
        setEnquiry({...enquiry, [errorObject.errorName]: errorObject.errorMessage});
    };

    const validateUserName = (event) => {
        validateName(event);
        errorSetter();
    };

    const validateUserMail = (event) => {
        validateMail(event);
        errorSetter();
    };

    const validateUserMessage = (event) => {
        validateAddress(event);
        errorSetter();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateEnquiry(event);
        errorSetter();
        if (isValid) {
            console.log('valid');
        }
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setEnquirerDetails({
            ...enquirerDetails,
            [name]: value
        });

        if (event.target.name === 'eFName') {
            validateUserName(event);
        } else if (event.target.name === 'eLName') {
            validateUserName(event);
        } else if (event.target.name === 'eMail') {
            validateUserMail(event);
        } else if (event.target.name === 'eMessage') {
            validateUserMessage(event);
        }
    };

    return (
        <>
            <Helmet>
                <title>Make an enquiry or give feedback - Highground Innovations</title>
            </Helmet>
            <NavBar/>
            <div className="enquiry">
                <SuccessModal show={modalShow} onHide={hideModal}
                              maintext="Enquiry sent successfully"
                              subtext="Thanks for your feedback"/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-xl-7 left">
                            <div className="question-image" style={{backgroundImage: `url(${Question})`}}>
                                <div className="imageLayer">
                                    <h1 className="bannerText">Have an enquiry?</h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-xl-5 right">

                            <h2>Get in touch</h2>
                            <p className="subtopic">Have an enquiry or some feedback for us? <br/> Fill out the form
                                below
                                to contact
                                our team.
                            </p>
                            <form id="enquiry_form" onSubmit={handleSubmit} noValidate>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">First name</label>
                                        <div className="input-field">
                                            <input type="text" className="form-control" id="eFirstName"
                                                   placeholder="First name" name="eFName" onBlur={validateUserName}
                                                   onChange={handleChange}/>
                                            <i className="fas" id="eFName"/>
                                        </div>
                                        <p className="service-error">{enquiry.eFNameError}</p>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Last name</label>
                                        <div className="input-field">
                                            <input type="text" className="form-control" id="inputPassword4"
                                                   placeholder="Last name" name="eLName" onBlur={validateUserName}
                                                   onChange={handleChange}/>
                                            <i className="fas" id="eLName"/>
                                        </div>
                                        <p className="service-error">{enquiry.eLNameError}</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <div className="input-field">
                                        <input type="email" className="form-control" id="email"
                                               placeholder="email@gmail.com" name="eMail"
                                               onBlur={validateUserMail} onChange={handleChange}/>
                                        <i className="fas" id="eMail"/>
                                    </div>
                                    <p className="service-error">{enquiry.eMailError}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <div className="input-field">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                              name="eMessage"
                                              onBlur={validateUserMessage} onChange={handleChange}/>
                                        <i className="fas" id="eMessage"/>
                                    </div>
                                    <p className="service-error">{enquiry.eMessageError}</p>
                                </div>
                                <CustomButton type="submit" text="Make enquiry" button_type="regular2"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};



export default Enquiry;
