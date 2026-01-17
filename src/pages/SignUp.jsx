import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // 📱 only digits for phone
        if (name === "phone" && !/^\d*$/.test(value)) return;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }

        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (formData.phone.length !== 10) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Minimum 6 characters required";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!formData.terms) {
            newErrors.terms = "You must agree to the terms";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
        console.log("Signup Data:", formData);

        // 🔐 user login simulate (optional)
        localStorage.setItem("isLoggedIn", "true");

        // 👉 dashboard redirect
        navigate("/dashboard");
    }
};


    return (
        <>
            {/* PAGE HEADER */}
            <div className="container-fluid bg-lights py-5 mb-5">
                <div className="container text-center py-5">
                    <p className="text-primarys text-uppercase mb-2">
                        Create Account
                    </p>
                    <h1 className="display-5">
                        Join Us Today 🚀
                    </h1>
                </div>
            </div>

            {/* SIGN UP CARD */}
            <div className=" py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="bg-white shadow rounded p-5">
                                <div className="w-100 d-flex justify-content-between align-items-center">
                                    <h3 className="mb-4">Sign Up</h3>
                                    <Link to="/" className="border rounded-5 p-1">
                                        <i className="bi bi-house"></i>
                                    </Link>
                                </div>

                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="row g-3">

                                        {/* NAME */}
                                        <div className="col-md-6">
                                            <label className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                            />
                                            <div className="invalid-feedback">{errors.name}</div>
                                        </div>

                                        {/* PHONE */}
                                        <div className="col-md-6">
                                            <label className="form-label">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                maxLength="10"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                            />
                                            <div className="invalid-feedback">{errors.phone}</div>
                                        </div>

                                        {/* EMAIL */}
                                        <div className="col-12">
                                            <label className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                            />
                                            <div className="invalid-feedback">{errors.email}</div>
                                        </div>

                                        {/* PASSWORD */}
                                        <div className="col-md-6 position-relative">
                                            <label className="form-label">Password</label>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                            />
                                            <i
                                                className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                                                style={{ position: "absolute", right: "15px", top: "38px", cursor: "pointer" }}
                                                onClick={() => setShowPassword(!showPassword)}
                                            />
                                            <div className="invalid-feedback">{errors.password}</div>
                                        </div>

                                        {/* CONFIRM PASSWORD */}
                                        <div className="col-md-6 position-relative">
                                            <label className="form-label">Confirm Password</label>
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                                            />
                                            <i
                                                className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`}
                                                style={{ position: "absolute", right: "15px", top: "38px", cursor: "pointer" }}
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            />
                                            <div className="invalid-feedback">{errors.confirmPassword}</div>
                                        </div>

                                        {/* TERMS */}
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    name="terms"
                                                    checked={formData.terms}
                                                    onChange={handleChange}
                                                    className="form-check-input"
                                                />
                                                <label className="form-check-label">
                                                    I agree to the{" "}
                                                    <a href="/terms" className="text-primarys fw-semibold">
                                                        Terms & Conditions
                                                    </a>
                                                </label>
                                                {errors.terms && (
                                                    <div className="text-danger small">{errors.terms}</div>
                                                )}
                                            </div>
                                        </div>

                                      <div className="col-12">
    <button type="submit" className="btn btn-primarys w-100 py-3">
        Create Account
    </button>
</div>

                                    </div>

                                    <p className="text-center mt-4 mb-0">
                                        Already have an account?{" "}
                                        <Link to="/signin" className="text-primarys fw-semibold">
                                            Sign In
                                        </Link>
                                    </p>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
