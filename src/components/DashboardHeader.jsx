import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderDashboard = ({ user }) => {
  const navigate = useNavigate();
  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("hasActivePlan");
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3 sticky-top">
      <Link className="navbar-brand fw-bold fs-4 text-primarys" to="/">
        <i className="fas fa-heart me-2"></i> PHOTOZONE
      </Link>

      <div className="ms-auto d-flex align-items-center gap-4">
      

        <Link to="/plans" className="btn btn-primarys rounded-pill px-4">
          <i className="fas fa-crown me-2"></i> Upgrade
        </Link>
        <Link to="/" className="btn btn-primarys rounded-pill px-4">
          <i className="fas fa-home me-2"></i> Home
        </Link>

        <div className="dropdown">
          <button
            className="btn d-flex align-items-center gap-2 border-0 bg-transparent dropdown-toggle"
            type="button"
            id="userDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div
              className="rounded-circle bg-primarys text-white d-flex align-items-center justify-content-center"
              style={{ width: 38, height: 38 }}
            >
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="fw-semibold">{user.name}</span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
            <li>
              <Link className="dropdown-item" to="/profile">
                <i className="fas fa-user me-2"></i> My Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="p-2">
               <button
          onClick={handleLogout}
          className="btn btn-outline-danger rounded-pill px-3"
        >
          <i className="fas fa-sign-out-alt me-1"></i> Logout
        </button>
            </li>
          </ul>
        </div>


       
      </div>
    </nav>
  );
};

export default HeaderDashboard;
