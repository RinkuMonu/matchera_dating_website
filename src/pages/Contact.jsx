import React from "react";

const Contact = () => {
    return (
        <>
            {/* PAGE HEADER */}
            <div className="container-fluid bg-lights py-5 mb-5">
                <div className="container py-5 text-center">
                    <p className="text-primarys text-uppercase mb-2 animated slideInDown">
                        Contact Us
                    </p>
                    <h1 className="display-4 animated slideInDown">
                        Get In Touch With Us
                    </h1>
                </div>
            </div>

            {/* CONTACT SECTION */}
            <div className=" py-5">
                <div className="container">
                    <div className="row g-5">
                        
                        {/* CONTACT INFO */}
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="text-primarys text-uppercase mb-2">
                                Contact Info
                            </p>
                            <h1 className="display-6 mb-4">
                                We Are Here To Help You
                            </h1>
                            <p className="mb-4">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                                Aliqu diam amet diam et eos.
                            </p>

                            <div className="d-flex border-bottom pb-3 mb-3">
                                <i className="fa fa-map-marker-alt fa-2x text-primarys me-3"></i>
                                <div>
                                    <h5 className="mb-1">Office Address</h5>
                                    <span>123 Street, New York, USA</span>
                                </div>
                            </div>

                            <div className="d-flex border-bottom pb-3 mb-3">
                                <i className="fa fa-phone-alt fa-2x text-primarys me-3"></i>
                                <div>
                                    <h5 className="mb-1">Call Us</h5>
                                    <span>+012 345 6789</span>
                                </div>
                            </div>

                            <div className="d-flex">
                                <i className="fa fa-envelope fa-2x text-primarys me-3"></i>
                                <div>
                                    <h5 className="mb-1">Email Us</h5>
                                    <span>info@example.com</span>
                                </div>
                            </div>
                        </div>

                        {/* CONTACT FORM */}
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-light p-5">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control"
                                                rows="5"
                                                placeholder="Message"
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn btn-primarys py-3 px-5"
                                                type="submit"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
