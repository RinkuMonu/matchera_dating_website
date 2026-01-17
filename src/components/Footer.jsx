import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  useEffect(() => {
    const btn = document.querySelector(".back-to-top");
    const toggleVisibility = () => {
      if (window.scrollY > 300) btn?.classList.add("show");
      else btn?.classList.remove("show");
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid footer position-relative bg-dark text-white-50 py-5 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ position: "relative" }}
      >
        <div className="row g-5 py-5">
          <div className="col-lg-6 pe-lg-5">
            <Link to="/" className="navbar-brand">
              <h1 className="display-5 text-primarys">Photozone</h1>
            </Link>
            <p>
              Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem
              nonumy.
            </p>
            <p>
              <i className="fa fa-map-marker-alt me-2"></i>123 Street, New York,
              USA
            </p>
            <p>
              <i className="fa fa-phone-alt me-2"></i>+012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope me-2"></i>info@example.com
            </p>
          </div>

          <div className="col-lg-6 ps-lg-5">
            <div className="row g-5">
              <div className="col-sm-6">
                <h4 className="text-light mb-4">Quick Links</h4>
                {[
                  { name: "About Us", to: "/about" },
                  { name: "Contact Us", to: "/contact" },
                  { name: "Our Services", to: "/products" },
                ].map((link, i) => (
                  <Link key={i} className="btn btn-link" to={link.to}>
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="col-sm-6">
                <h4 className="text-light mb-4">Popular Links</h4>
                {[
                  { name: "Terms & Condition", to: "/terms" },
                  { name: "Support", to: "/contact" },
                  { name: "Cancelation Policy", to: "/cancellation-policy" },
                  { name: "Privacy Policy", to: "/privacy-policy" },
                ].map((link, i) => (
                  <Link key={i} className="btn btn-link" to={link.to}>
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="col-sm-12">
                <h4 className="text-light mb-4">Newsletter</h4>

                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="email"
                      required
                      className="form-control border-0 bg-secondary"
                      style={{ padding: "20px 30px" }}
                      placeholder="Your Email Address"
                    />
                    <button className="btn btn-primarys px-4">Subscribed</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright */}
      <div className="position-relative">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="py-4 px-5 text-center text-md-start">
            <p className="mb-0">
              &copy; <Link className="text-primarys" to="/">Your Site Name</Link>. All Rights Reserved.
            </p>
          </div>
          {/* <div className="py-4 px-5 bg-secondary footer-shape text-center text-md-end">
            <p className="mb-0">
              Designed by{" "}
              <a className="text-primarys fw-bold" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              | Distributed by{" "}
              <a href="https://themewagon.com" target="_blank" rel="noreferrer">
                ThemeWagon
              </a>
            </p>
          </div> */}
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#"
        onClick={scrollToTop}
        className="btn btn-lg btn-primarys btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>

      {/* Newsletter Modal */}
      {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Success 🎉</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <i className="fa fa-check-circle text-success fs-1 mb-3"></i>
                  <p className="mb-0">
                    You have successfully subscribed to our newsletter.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primarys"
                    onClick={() => setShowModal(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
};

export default Footer;
