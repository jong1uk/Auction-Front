import React from "react";
import { Link } from "react-router-dom";
import InquiryListContainer from "./InquiryListContainer";

const InquiryPage = () => {
    return (
        <div className="inquiry-page">
            <Link to="/service/inquiryRegistration">
                <button className="small-btn">문의하기</button>
            </Link>
            <InquiryListContainer />
            <nav className="bottom-nav">
                <Link to="/home" className="nav-item">
                    HOME
                </Link>
                <Link to="/style" className="nav-item">
                    STYLE
                </Link>
                <Link to="/shop" className="nav-item">
                    SHOP
                </Link>
                <Link to="/saved" className="nav-item">
                    SAVED
                </Link>
                <Link to="/my" className="nav-item">
                    MY
                </Link>
            </nav>
        </div>
    );
};

export default InquiryPage;
