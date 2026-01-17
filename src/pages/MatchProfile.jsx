import React from "react";
import { useParams } from "react-router-dom";
import profile1 from "../assets/img/service-1.jpg";
import profile2 from "../assets/img/service-2.jpg";
import profile3 from "../assets/img/service-3.jpg";

const matchesData = [
  {
    id: "1",
    name: "Aarohi",
    age: 25,
    img: profile1,
    location: "Delhi, India",
    matchPercent: "82%",
    shortDesc: "Creative soul who loves photography & travel.",
    longDesc:
      "I believe in deep conversations, spontaneous trips, and capturing little moments of life. Looking for someone genuine who values trust, laughter, and growth together.",
    height: "5'5\"",
    profession: "Graphic Designer",
    interests: ["Traveling", "Photography", "Music", "Cafe Hopping"],
    lookingFor: "Serious Relationship"
  },
  {
    id: "2",
    name: "Rohan",
    age: 28,
    img: profile2,
    location: "Mumbai, India",
    matchPercent: "76%",
    shortDesc: "Fitness freak with a love for movies.",
    longDesc:
      "Gym in the morning, movies at night. I enjoy staying active and also relaxing with good food and meaningful conversations.",
    height: "5'9\"",
    profession: "Software Engineer",
    interests: ["Fitness", "Movies", "Cooking"],
    lookingFor: "Long-term Dating"
  },
  {
    id: "3",
    name: "Simran",
    age: 24,
    img: profile3,
    location: "Bangalore, India",
    matchPercent: "88%",
    shortDesc: "Techie by day, artist by heart.",
    longDesc:
      "I love painting, music, and exploring new cafes. Looking for someone kind, ambitious, and emotionally mature.",
    height: "5'4\"",
    profession: "UI/UX Designer",
    interests: ["Art", "Music", "Sketching"],
    lookingFor: "Meaningful Connection"
  }
];

const MatchProfile = () => {
  const { id } = useParams();
  const match = matchesData.find(m => m.id === id);

  if (!match) {
    return <h2 className="text-center py-5">Profile Not Found</h2>;
  }

  return (
    <>
    
      {/* PAGE HEADER */}
      <div className="container-fluid bg-lights py-5 mb-5">
        <div className="container text-center py-5">
          <p className="text-primarys text-uppercase mb-2">
            Match Profile
          </p>
          <h1 className="display-5">
            {match.name}, {match.age}
          </h1>
          <p className="lead">
            {match.matchPercent} Compatibility Match ✨
          </p>
        </div>
      </div>

      {/* PROFILE CONTENT */}
      <div className=" py-5">
        <div className="container">
          <div className="row g-5 align-items-center">

            {/* IMAGE */}
            <div className="col-lg-6">
              <img
                src={match.img}
                alt={match.name}
                className="img-fluid bg-light p-3 rounded"
              />
            </div>

            {/* DETAILS */}
            <div className="col-lg-6">
              <h2 className="mb-2">{match.name}, {match.age}</h2>
              <h5 className="text-primarys mb-3">{match.location}</h5>

              <p className="fw-semibold mb-3">
                {match.shortDesc}
              </p>

              <p className="mb-4">
                {match.longDesc}
              </p>

              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <strong>Height:</strong> {match.height}
                </div>
                <div className="col-sm-6">
                  <strong>Profession:</strong> {match.profession}
                </div>
                <div className="col-sm-6">
                  <strong>Looking For:</strong> {match.lookingFor}
                </div>
                <div className="col-sm-6">
                  <strong>Match:</strong> {match.matchPercent}
                </div>
              </div>

              <h5 className="mb-3">Interests</h5>
              <ul className="list-unstyled mb-4">
                {match.interests.map((item, index) => (
                  <li key={index} className="mb-2">
                    <i className="fa fa-heart text-primarys me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="d-flex gap-3 flex-wrap">
                <a href="/signin" className="btn btn-success py-3 px-4">
                  <i className="fa fa-heart me-2"></i>
                  Like Profile
                </a>

                <a href="/signin" className="btn btn-primarys py-3 px-4">
                  <i className="fa fa-comment me-2"></i>
                  Start Chat
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchProfile;
