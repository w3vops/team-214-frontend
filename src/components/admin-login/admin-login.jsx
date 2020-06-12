import React, {useState} from "react";
import './admin-login.style.css';
import NavBar from "../nav/navbar";

const AdminLogin = () => {

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });

    const {email, password} = userCredentials;

    const handleSubmit = event => {
        event.preventDefault();
    };

    const handleChange = event => {
        const {value, name} = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    };

    return (
        <>
            <NavBar/>
            <div className="login-dark">
                <form onSubmit={handleSubmit}>
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration">
                        <i className="fas fa-lock"/>
                    </div>
                    <div className="form-group">
                        <input onChange={handleChange} className="form-control" type="email" name="email"
                               placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input onChange={handleChange} className="form-control" type="password" name="password"
                               placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </>
    );
};



export default AdminLogin;
