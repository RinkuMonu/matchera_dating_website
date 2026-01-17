import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // 🔐 login status check
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("rememberUser");
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn">
      
      <Link to="/" className="navbar-brand d-block d-lg-none">
        <h1 className="text-primarys">Photozone</h1>
      </Link>

      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
        id="navbarCollapse"
      >
        {/* LEFT */}
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <a href="/#about" className="nav-item nav-link">About</a>
          <Link to="/products" className="nav-item nav-link">Services</Link>
        </div>

        {/* CENTER */}
        <Link
          to="/onboarding"
          className="navbar-brand bg-primarys py-2 px-4 mx-3 d-none d-lg-block"
        >
          <h1 className="text-white">Select Your Matches</h1>
        </Link>

        {/* RIGHT */}
        <div className="navbar-nav me-auto py-0">
          <Link to="/contact" className="nav-item nav-link">Contact</Link>

          {!isLoggedIn ? (
            <>
              <Link to="/signin" className="nav-item nav-link">Sign In</Link>
              <Link to="/signup" className="nav-item nav-link">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="nav-item nav-link fw-semibold">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="nav-item nav-link btn btn-link text-danger"
                style={{ textDecoration: "none" }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
