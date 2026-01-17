// Imports
import service1 from "../assets/img/service-1.jpg";
import service2 from "../assets/img/service-2.jpg";
import service3 from "../assets/img/service-3.jpg";
import service4 from "../assets/img/service-4.jpg";

import project1 from "../assets/img/project-1.jpg";
import project2 from "../assets/img/project-2.jpg";
import project3 from "../assets/img/project-3.jpg";
import project4 from "../assets/img/project-4.jpg";
import project5 from "../assets/img/project-5.jpg";
import project6 from "../assets/img/project-6.jpg";
import project7 from "../assets/img/project-7.jpg";
import project8 from "../assets/img/project-8.jpg";
import { Link } from "react-router-dom";

const ServicesAndProjects = () => {
  const services = [
    { img: service1, title: "Weddings", delay: "0.1s" },
    { img: service2, title: "Portraits", delay: "0.3s" },
    { img: service3, title: "Fashion", delay: "0.5s" },
    { img: service4, title: "Editorial", delay: "0.7s" },
  ];

  const projects = [
    [
      { img: project5, title: "Memory" },
      { img: project1, title: "Wedding" },
    ],
    [
      { img: project2, title: "Portrait" },
      { img: project6, title: "Travel" },
    ],
    [
      { img: project7, title: "Wedding" },
      { img: project3, title: "Memory" },
    ],
    [
      { img: project4, title: "Fashion" },
      { img: project8, title: "Portrait" },
    ],
  ];

  return (
    <>
      {/* Services Start */}
      <div className=" bg-lights py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="text-primarys text-uppercase mb-2">Our Services</p>
            <h1 className="display-6 mb-4">
              We Provide Best Professional Services
            </h1>
          </div>

          <div className="row g-3">
            {services.map((service, i) => (
              <div
                className={`col-lg-3 col-md-6 ${i % 2 === 1 ? "pt-lg-5" : ""} wow fadeInUp`}
                data-wow-delay={service.delay}
                key={i}
              >
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src={service.img}
                      alt={service.title}
                    />
                    <div className="service-overlay">
                      <a
                        className="btn btn-lg-square btn-outline-light rounded-circle"
                        href="/products"
                      >
                        <i className="fa fa-link text-primarys"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h4>{service.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Projects Start */}
      <div className=" py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="text-primarys text-uppercase mb-2">Our Works</p>
            <h1 className="display-6 mb-0">
              Discover Our Unique And Creative Photoshoot
            </h1>
          </div>

          <div className="row g-3">
            {projects.map((column, i) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 + i * 0.2}s`}
                key={i}
              >
                <div className="row g-3">
                  {column.map((proj, j) => (
                    <Link to="/products" className="col-12" key={j}>
                      <div className="project-item">
                        <img
                          className="img-fluid"
                          src={proj.img}
                          alt={proj.title}
                        />
                        <a
                          className="project-title h5 mb-0 text-black"
                          href={proj.img}
                          data-lightbox="project"
                        >
                          {proj.title}
                        </a>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Projects End */}
    </>
  );
};

export default ServicesAndProjects;
