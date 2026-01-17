import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log("Login Data:", formData);

            // 🔐 login save
            localStorage.setItem("isLoggedIn", "true");

            if (formData.remember) {
                localStorage.setItem("rememberUser", "true");
            }

            // 👉 redirect to plans (MANDATORY)
            navigate("/plans");
        }
    };

    return (
        <>
            {/* PAGE HEADER */}
            <div className="container-fluid bg-lights py-5 mb-5">
                <div className="container text-center py-5">
                    <p className="text-primarys text-uppercase mb-2">
                        Account Login
                    </p>
                    <h1 className="display-5">
                        Welcome Back 👋
                    </h1>
                </div>
            </div>

            {/* SIGN IN CARD */}
            <div className=" py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="bg-white shadow p-5 rounded">

                                <h3 className="text-center mb-4">
                                    Sign In
                                </h3>

                                <form onSubmit={handleSubmit} noValidate>

                                    {/* EMAIL */}
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                            placeholder="example@email.com"
                                        />
                                        <div className="invalid-feedback">
                                            {errors.email}
                                        </div>
                                    </div>

                                    {/* PASSWORD */}
                                    <div className="mb-3 position-relative">
                                        <label className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                            placeholder="Enter your password"
                                        />
                                        <i
                                            className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                                            style={{
                                                position: "absolute",
                                                right: "15px",
                                                top: "38px",
                                                cursor: "pointer"
                                            }}
                                            onClick={() => setShowPassword(!showPassword)}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.password}
                                        </div>
                                    </div>

                                    {/* REMEMBER + FORGOT */}
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                checked={formData.remember}
                                                onChange={handleChange}
                                                className="me-2"
                                            />
                                            Remember me
                                        </div>
                                        {/* <Link to="/forgot-password" className="text-primarys">
                                            Forgot Password?
                                        </Link> */}
                                    </div>

                                    {/* BUTTON */}
                                    <button
                                        type="submit"
                                        className="btn btn-primarys w-100 py-3"
                                    >
                                        Sign In
                                    </button>

                                    {/* SIGN UP */}
                                    <p className="text-center mt-4 mb-0">
                                        Don’t have an account?{" "}
                                        <Link to="/signup" className="text-primarys fw-semibold">
                                            Create Account
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

export default SignIn;
