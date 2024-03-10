import React, { Fragment } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Sendmessage from "../Components/Sendmessage/Sendmessage";
import Infor from "../Components/Contactinfo/Infor";
import Address from "../Components/Address/Address";
const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Address />
        <div className="row">
          <div className="col-md-6">
            <Sendmessage />
          </div>
          <div className="col-md-6">
            <Infor />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
