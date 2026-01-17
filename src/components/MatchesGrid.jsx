import React from "react";
import { useNavigate } from "react-router-dom";

const MatchesGrid = ({ matches }) => {
  const navigate = useNavigate();

  if (!matches.length)
    return <p className="text-center text-muted">No matches found 😔</p>;

  return (
    <div className="row g-4">
      {matches.map((m) => (
        <div className="col-lg-4 col-md-6 wow fadeInUp" key={m.id}>
          <div
            className="bg-white shadow-sm rounded overflow-hidden h-100"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/match/${m.id}`)}
          >
            <img
              src={m.photo}
              alt={m.name}
              className="img-fluid w-100"
              style={{ height: "260px", objectFit: "cover" }}
            />
            <div className="p-4">
              <h5 className="mb-1">{m.name}, {m.age}</h5>
              <p className="text-muted mb-2">{m.location}</p>
              <p className="small">{m.desc}</p>
              <span className="badge bg-success">78% Match</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchesGrid;
