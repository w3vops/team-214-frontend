import React, {useState} from "react";
import "./adminListItem.style.css";
import {connect} from "react-redux";
import {removeEnquiryStart} from "../../redux/enquiry/enquiry.actions";


const AdminEnquiryListItem = ({enquiry, deleteEnquiry}) => {

    const [icon, setIcon] = useState({
        minus: 'inline-block',
        trash: 'none',
        revert: 'none',
    });

    const handleTrash = () => {
        setIcon({...icon, minus: 'none', trash: 'inline-block', revert: 'inline-block' });
    };

    const handleUltimateTrash = () => {
        deleteEnquiry(enquiry);
    };

    const handleRevert = () => {
        setIcon({...icon, minus: 'inline-block', trash: 'none', revert: 'none' });
    };

    return (
        <div className="admin-list-item container-fluid">
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <p>{enquiry.eFName.toUpperCase()} {enquiry.eLName.toUpperCase()}</p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                    <p>{enquiry.date_enquired}</p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                    <p>{enquiry.eMail}</p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <p>{enquiry.eMessage}</p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                    <i onClick={handleUltimateTrash} className="fas fa-trash-alt" style={{display: `${icon.trash}`}}/>
                    <i onClick={handleTrash} className="fas fa-minus-square" style={{display: `${icon.minus}`}}/>
                    <i onClick={handleRevert} className="fas fa-undo-alt" style={{display: `${icon.revert}`}}/>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteEnquiry: (enquiryItem) => dispatch(removeEnquiryStart(enquiryItem))
});

export default connect(null, mapDispatchToProps)(AdminEnquiryListItem);