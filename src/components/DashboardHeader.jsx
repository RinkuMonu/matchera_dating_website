import React from "react";
import { Link } from "react-router-dom";

const HeaderDashboard = ({ user }) => {
  if (!user) return null; // 🔥 important safety check

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
      <Link className="navbar-brand text-primarys fw-bold" to="/">
        PHOTOZONE
      </Link>

      <div className="ms-auto d-flex align-items-center gap-3">
        <Link to="/plans" className="btn btn-outline-primarys">
          Plans
        </Link>
        <span className="fw-semibold">{user.name}</span>
      </div>
    </nav>
  );
};

export default HeaderDashboard;
