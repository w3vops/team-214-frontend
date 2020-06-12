import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "./dashboard.style.css";
import AdminList from "../../components/adminList/adminList";
import {Helmet} from "react-helmet";
import NavBar from "../../components/nav/navbar";


const AdminDashboard = () => {

    const [filter, setFilter] = useState("glisten");


    const handleChange = event => {
        const {value} = event.target;
        setFilter(value);
    };

    return (
        <>
            <Helmet>
                <title>Admin Dashboard</title>
            </Helmet>
            <NavBar/>
            <div className="main-admin">
                <div className="admin-header">
                    <h4><span className="make-green">Admin</span> Dashboard</h4>
                    <div className="select">
                        <p>Select Portal</p>
                        <select onChange={handleChange} id="admin-services" name="admin-services">
                            <option value="glisten">Glisten service</option>
                            <option value="smartshopper">Smartshopper service</option>
                            <option value="innkeeper">Innkeeper service</option>
                            <option value="fado">FADO Farms service</option>
                            <option value="enquiries">Enquiries</option>
                        </select>
                    </div>
                </div>
                <section className="main-list">
                    <div className="list-headers container-fluid">
                        <div className="row">
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <p>Username</p>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                                <p>Date</p>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                                <p>Contact</p>
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                {
                                    filter === 'enquiries' ? <p>Message</p> : <p>Address</p>
                                }
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                                <p>Actions</p>
                            </div>
                        </div>
                    </div>

                    <AdminList filter={filter}/>
                </section>
            </div>
        </>
    )
};


export default AdminDashboard;
