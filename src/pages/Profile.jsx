import React from "react";
import selfimg from "../assets/img/project-2.jpg";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userProfile"));
  if (!user) return null;

  return (
    <>
      {/* FULL WIDTH BANNER */}
      <div
        className="container-fluid bg-lights py-5"
        style={{
          background:
            "linear-gradient(120deg, #f8f9fa, #ffe6ec)",
        }}
      >
        <div className="container text-left py-5">
          <p className="text-primarys text-uppercase mb-2">
            Photographer Profile
          </p>
          <h1 className="display-6 mb-0">{user.name}</h1>
        </div>
      </div>

      {/* PROFILE CARD */}
      <div className="container-fluid px-0" >
        <div className="row">
          <div className="col-lg-9 col-xl-12">

            <div className="bg-white shadow-sm rounded-3">

              {/* PROFILE IMAGE */}
              <div className="text-left pt-4">
                <img
                  src={selfimg}
                  alt="profile"
                  className="rounded-circle bg-white p-2 shadow"
                  style={{
                    width: 150,
                    height: 150,
                    objectFit: "cover",
                    marginTop: -90,
                  }}
                />
              </div>

              {/* BODY */}
              <div className="text-left px-4 pb-5 pt-3">
                <p className="text-muted mb-1">
                  {user.age} Years • {user.gender}
                </p>

                <p className="mb-4">
                  <i className="fa fa-map-marker-alt text-primarys me-2"></i>
                  {user.location}
                </p>

                <p
                  className="text-muted mb-5"
                >
                  {user.bio}
                </p>

                {/* DETAILS */}
                <div className="row text-start g-4">
                  <div className="col-md-6">
                    <strong className="d-block mb-1">Interests</strong>
                    <span className="text-muted">{user.interests}</span>
                  </div>

                  <div className="col-md-6">
                    <strong className="d-block mb-1">Hobbies</strong>
                    <span className="text-muted">{user.hobbies}</span>
                  </div>

                  <div className="col-md-6">
                    <strong className="d-block mb-1">Profession</strong>
                    <span className="text-muted">{user.profession}</span>
                  </div>

                  <div className="col-md-6">
                    <strong className="d-block mb-1">Education</strong>
                    <span className="text-muted">{user.education}</span>
                  </div>

                  <div className="col-md-12">
                    <strong className="d-block mb-1">Looking For</strong>
                    <span className="text-muted">{user.lookingFor}</span>
                  </div>

                  <div className="col-md-12">
                    <strong className="d-block mb-1">Lifestyle</strong>
                    <span className="text-muted">{user.lifestyle}</span>
                  </div>
                </div>

                {/* BUTTONS */}
                {/* <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
                  <button className="btn btn-primarys px-5 py-2">
                    Edit Profile
                  </button>
                  <button className="btn btn-outline-secondary px-5 py-2">
                    Change Photo
                  </button>
                </div> */}
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
