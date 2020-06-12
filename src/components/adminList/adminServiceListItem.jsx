import React, {useState} from "react";
import "./adminListItem.style.css";
import {removeServiceStart} from "../../redux/services/services.actions";
import {connect} from "react-redux";


const AdminServiceListItem = ({service, deleteService,}) => {

    const [icon, setIcon] = useState({
        minus: 'inline-block',
        trash: 'none',
        revert: 'none',
    });

    const handleTrash = () => {
        setIcon({...icon, minus: 'none', trash: 'inline-block', revert: 'inline-block'});
    };

    const handleUltimateTrash = () => {
        deleteService(service);
    };

    const handleRevert = () => {
        setIcon({...icon, minus: 'inline-block', trash: 'none', revert: 'none'});
    };

    return (
        <div className="admin-list-item container-fluid">
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <p>{service.fname.toUpperCase()} {service.lname.toUpperCase()}</p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                    <p>{service.date_booked}</p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                    <p>{service.cont}</p>
                    <p>{service.mail}</p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <p>{service.city}, {service.address}</p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                    <i onClick={handleUltimateTrash} className="fas fa-trash-alt" style={{display: `${icon.trash}`}}/>
                    <i onClick={handleTrash} className="fas fa-minus-square" style={{display: `${icon.minus}`}}/>
                    <i onClick={handleRevert} className="fas fa-undo-alt" style={{display: `${icon.revert}`}}/></div>
            </div>
            <div className='hr'/>
            <div className="description">
                <p className="make-gold title">Description</p>
                <p className="dl">{service.description}</p>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteService: (serviceItem) => dispatch(removeServiceStart(serviceItem))
});

export default connect(null, mapDispatchToProps)(AdminServiceListItem);