import React from "react";

const FilterPanel = ({ filters, setFilters, applyFilters }) => {
  const handleChange = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <div
      className="bg-white p-4 shadow-sm rounded wow fadeInUp"
      style={{ position: "sticky", top: "110px" }}
    >
      <p className="text-primarys text-uppercase mb-2">Filters</p>
      <h5 className="mb-3">Refine Results</h5>

      <div className="mb-3">
        <label className="form-label">Age Range</label>
        <div className="d-flex gap-2">
          <input type="number" name="minAge" className="form-control" placeholder="Min" onChange={handleChange} />
          <input type="number" name="maxAge" className="form-control" placeholder="Max" onChange={handleChange} />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Location</label>
        <input type="text" name="location" className="form-control" placeholder="City" onChange={handleChange} />
      </div>

      <button className="btn btn-primarys w-100 py-2" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;
