import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StepperForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    interests: "",
    hobbies: "",
    lookingFor: "",
    lifestyle: "",
    profession: "",
    education: "",
    bio: "",
    photo: null
  });

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // save profile in localStorage
    localStorage.setItem("userProfile", JSON.stringify(formData));
    // set logged in status
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("hasActivePlan", "false"); // plan false by default
    // redirect to dashboard
    navigate("/dashboard");
  };

  const steps = [
    { label: "Full Name", field: <input type="text" name="name" className="form-control" required onChange={handleChange} value={formData.name}/> },
    { label: "Age & Gender", field: <>
        <input type="number" name="age" className="form-control mb-3" placeholder="Your Age" required onChange={handleChange} value={formData.age}/>
        <select name="gender" className="form-select" required onChange={handleChange} value={formData.gender}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </> },
    { label: "Location", field: <input type="text" name="location" className="form-control" required onChange={handleChange} value={formData.location}/> },
    { label: "Interests", field: <input type="text" name="interests" className="form-control" required onChange={handleChange} value={formData.interests}/> },
    { label: "Hobbies", field: <input type="text" name="hobbies" className="form-control" required onChange={handleChange} value={formData.hobbies}/> },
    { label: "Looking For", field: <select name="lookingFor" className="form-select" required onChange={handleChange} value={formData.lookingFor}>
        <option value="">Select</option>
        <option value="Friendship">Friendship</option>
        <option value="Casual">Casual</option>
        <option value="Serious Relationship">Serious Relationship</option>
      </select> },
    { label: "Lifestyle", field: <input type="text" name="lifestyle" className="form-control" placeholder="Ex: Non-Smoker, Drinks Occasionally" required onChange={handleChange} value={formData.lifestyle}/> },
    { label: "Profession & Education", field: <>
        <input type="text" name="profession" className="form-control mb-3" required onChange={handleChange} value={formData.profession}/>
        <input type="text" name="education" className="form-control" required onChange={handleChange} value={formData.education}/>
      </> },
    { label: "Bio", field: <textarea name="bio" className="form-control" required onChange={handleChange} value={formData.bio}></textarea> },
    { label: "Profile Photo", field: <input type="file" name="photo" className="form-control" accept="image/*" required onChange={handleChange}/> }
  ];

  return (
    <div className=" py-5 mt-5">
      <div className="container">
        <div className="bg-light shadow rounded p-5 mx-auto" >
          <h3 className="mb-4 text-center">Complete Your Profile</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label fw-semibold">{steps[step - 1].label}</label>
              {steps[step - 1].field}
            </div>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between">
              {step > 1 ? <button type="button" className="btn btn-secondary" onClick={handlePrev}>Previous</button> : <div></div>}
              {step < steps.length ? <button type="button" className="btn btn-primarys" onClick={handleNext}>Next</button> : <button type="submit" className="btn btn-primarys">Finish</button>}
            </div>

            {/* Progress Bar */}
            <div className="progress mt-4" style={{ height: "8px", borderRadius: "4px" }}>
              <div className="progress-bar bg-primarys" style={{ width: `${(step / steps.length) * 100}%` }}></div>
            </div>

            <p className="text-center mt-3">Step {step} of {steps.length}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepperForm;
