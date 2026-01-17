import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterPanel from "../components/FilterPanel";
import MatchesGrid from "../components/MatchesGrid";
import HeaderDashboard from "../components/DashboardHeader";
import selfimg from "../assets/img/project-2.jpg";
import banner from '../assets/img/banner.jpg';

const dummyMatches = [
    { id: 1, name: "Alice", age: 25, location: "New York", photo: "https://i.pravatar.cc/400?img=1", desc: "Loves photography and travel." },
    { id: 2, name: "Bob", age: 28, location: "Los Angeles", photo: "https://i.pravatar.cc/400?img=2", desc: "Music and movies lover." },
    { id: 3, name: "Carol", age: 23, location: "Chicago", photo: "https://i.pravatar.cc/400?img=3", desc: "Fitness & food enthusiast." },
    { id: 4, name: "David", age: 30, location: "Miami", photo: "https://i.pravatar.cc/400?img=4", desc: "Adventure seeker." }
];

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [matches, setMatches] = useState(dummyMatches);
    const [filters, setFilters] = useState({ location: "", minAge: "", maxAge: "" });

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("userProfile"));
        if (!profile) navigate("/");
        else setUser(profile);
    }, [navigate]);

    const applyFilters = () => {
        let data = dummyMatches;
        if (filters.location)
            data = data.filter(m =>
                m.location.toLowerCase().includes(filters.location.toLowerCase())
            );
        if (filters.minAge)
            data = data.filter(m => m.age >= filters.minAge);
        if (filters.maxAge)
            data = data.filter(m => m.age <= filters.maxAge);
        setMatches(data);
    };

    if (!user) return null;

    return (
        <>
            <HeaderDashboard user={user} />

            {/* HERO – Home theme */}
            <div
                className="container-fluid py-5"
                style={{
                    background:
                        "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(" + banner + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="container text-center py-5">
                    <p className="text-primarys text-uppercase animated slideInDown">
                        Welcome To Photozone
                    </p>

                    <h1 className="display-4 text-white animated slideInDown">
                        Hello {user.name}
                    </h1>

                    <p className="lead text-white animated fadeInUp">
                        Where meaningful connections begin with a perfect match 💞
                    </p>
                </div>
            </div>


            {/* CONTENT */}
            <div className=" py-5 bg-light">

                {/* SELF PROFILE */}
                <div className="row mb-5">
                    <div className="col-12 wow fadeInUp">
                        <div className="bg-white shadow-sm rounded">

                            {/* Cover */}
                            {/* <div
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "180px",
                                }}
                            ></div> */}

                            {/* Profile Content */}
                            <div className="p-4 position-relative">

                                {/* Profile Image */}
                                <img
                                    src={selfimg}
                                    alt={user.name}
                                    className="rounded-circle border border-4 border-white position-absolute"
                                    style={{
                                        width: "130px",
                                        height: "130px",
                                        objectFit: "cover",
                                        top: "-65px",
                                        left: "30px",
                                    }}
                                />

                                <div className="row align-items-center mt-5">
                                    {/* Info */}
                                    <div className="col-md-8">
                                        <p className="text-primarys text-uppercase mb-1">
                                            My Profile
                                        </p>
                                        <h4 className="mb-1">
                                            {user.name}, {user.age || 24}
                                        </h4>
                                        <p className="text-muted mb-2">
                                            <i className="fa fa-map-marker-alt me-2"></i>
                                            {user.location || "New York"}
                                        </p>
                                        <p className="mb-0 small">
                                            {user.bio ||
                                                "Creative soul who loves photography, travel, and meaningful conversations."}
                                        </p>
                                    </div>

                                    {/* Stats */}
                                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                                        <div className="d-flex justify-content-md-end gap-4">
                                            <div>
                                                <h5 className="mb-0 text-primarys">128</h5>
                                                <small className="text-muted">Views</small>
                                            </div>
                                            <div>
                                                <h5 className="mb-0 text-primarys">32</h5>
                                                <small className="text-muted">Likes</small>
                                            </div>
                                            <div>
                                                <h5 className="mb-0 text-primarys">12</h5>
                                                <small className="text-muted">Matches</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* FILTER + MATCHES */}
                <div className="row g-4">
                    <div className="col-lg-3">
                        <FilterPanel
                            filters={filters}
                            setFilters={setFilters}
                            applyFilters={applyFilters}
                        />
                    </div>

                    <div className="col-lg-9">
                        <MatchesGrid matches={matches} />
                    </div>
                </div>

            </div>

        </>
    );
};

export default Dashboard;
