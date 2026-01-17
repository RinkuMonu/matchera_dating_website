import React from "react";
import about1 from "../assets/img/about-1.jpg";
import about2 from "../assets/img/about-2.jpg";
import team1 from "../assets/img/service-1.jpg";
import team2 from "../assets/img/service-2.jpg";
import team3 from "../assets/img/service-3.jpg";

const About = () => {
  return (
    <>
      {/* 1️⃣ HERO SECTION */}
      <div className="container-fluid bg-lights py-5 mb-5">
        <div className="container py-5 text-center">
          <p className="text-primarys text-uppercase mb-2">About Us</p>
          <h1 className="display-4">We Capture Moments That Last Forever</h1>
          <p className="lead mt-3">
            At Photozone, we believe that every photograph tells a story. Our goal is to turn your special moments into timeless memories.
          </p>
        </div>
      </div>

      {/* 2️⃣ ABOUT CONTENT */}
      <div className=" py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* IMAGE GRID */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-3 img-twice position-relative h-100">
                <div className="col-6">
                  <img className="img-fluid bg-light p-3" src={about1} alt="About" />
                </div>
                <div className="col-6 align-self-end">
                  <img className="img-fluid bg-light p-3" src={about2} alt="About" />
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <p className="text-primarys text-uppercase mb-2">Who We Are</p>
                <h1 className="display-6 mb-4">
                  Professional Photographers & Videographers
                </h1>
                <p className="mb-3">
                  Founded in 2010, Photozone has grown into one of the most trusted photography studios in New York. We specialize in capturing the beauty of every moment, whether it's a wedding, corporate event, or personal portrait session.
                </p>
                <p className="mb-4">
                  Our team uses state-of-the-art equipment and creative techniques to ensure each image is vibrant, meaningful, and timeless. We work closely with clients to understand their vision and bring it to life with precision and artistry.
                </p>

                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primarys me-3"></i> Creative Approach
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primarys me-3"></i> Professional Team
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primarys me-3"></i> High Quality Gear
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primarys me-3"></i> Customer Satisfaction
                  </div>
                </div>

                <a className="btn btn-primarys py-3 px-5" href="/contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3️⃣ MISSION */}
      <div className=" py-5 bg-light">
        <div className="container text-center">
          <p className="text-primarys text-uppercase mb-2">Our Mission</p>
          <h1 className="display-6 mb-4">
            Capturing Memories, One Click at a Time
          </h1>
          <p className="mb-4">
            Our mission at Photozone is to preserve life's most precious moments in a way that tells a story. From intimate family portraits to large-scale events, we aim to create images that evoke emotion, nostalgia, and joy. We value professionalism, creativity, and above all, client satisfaction.
          </p>
        </div>
      </div>

      {/* 4️⃣ TEAM SECTION */}
      <div className=" py-5">
        <div className="container text-center">
          <p className="text-primarys text-uppercase mb-2">Meet Top Professionals</p>
          <h1 className="display-6 mb-5">Talented & Creative Professionals</h1>
          <div className="row g-4">
            {[
              { img: team1, name: "John Doe", role: "Lead Photographer", bio: "With over 10 years of experience, John specializes in wedding and portrait photography, creating timeless images that clients cherish forever." },
              { img: team2, name: "Jane Smith", role: "Videographer", bio: "Jane captures every moment on film with precision and artistry, producing cinematic videos that tell your story beautifully." },
              { img: team3, name: "Mike Johnson", role: "Photo Editor", bio: "Mike brings magic to each photo with expert retouching, color correction, and creative enhancements." }
            ].map((member, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="team-item bg-light p-3">
                  <img src={member.img} className="img-fluid mb-3" alt={member.name} />
                  <h5>{member.name}</h5>
                  <p className="text-primarys">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5️⃣ SERVICES / PORTFOLIO */}
      <div className=" py-5 bg-light">
        <div className="container text-center">
          <p className="text-primarys text-uppercase mb-2">Our Services</p>
          <h1 className="display-6 mb-4">Professional Photography Packages</h1>
          <div className="row g-4">
            {[
              { title: "Wedding Photography", desc: "Full-day wedding coverage with candid and traditional shots, creative storytelling, and premium album options." },
              { title: "Portrait Shoot", desc: "Studio and outdoor portrait sessions tailored to your personality, style, and lighting preferences." },
              { title: "Video Editing", desc: "Cinematic video editing with professional color grading, effects, and audio enhancements." },
              { title: "Photo Retouching", desc: "High-quality retouching to make your photos flawless while maintaining natural beauty." }
            ].map((service, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="service-item bg-white p-3">
                  <h5>{service.title}</h5>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6️⃣ TESTIMONIALS */}
      <div className=" py-5">
        <div className="container text-center">
          <p className="text-primarys text-uppercase mb-2">Testimonials</p>
          <h1 className="display-6 mb-4">What Our Clients Say</h1>
          <div className="row g-4">
            {[
              { name: "Emily R.", feedback: "Photozone made our wedding unforgettable. The photos were stunning, and the team was professional and friendly." },
              { name: "David K.", feedback: "Excellent portrait session! The team understood exactly what I wanted and delivered amazing results." },
              { name: "Sophia L.", feedback: "Highly recommended for events. Creative, reliable, and passionate about their work." },
              { name: "Sophia L.", feedback: "Highly recommended for events. Creative, reliable, and passionate about their work." },
              { name: "Sophia L.", feedback: "Highly recommended for events. Creative, reliable, and passionate about their work." }
            ].map((testimonial, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="testimonial-item bg-light p-4">
                  <p>"{testimonial.feedback}"</p>
                  <h6>{testimonial.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
