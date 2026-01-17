// Imports - Team
import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";

// Imports - Testimonials
import testimonial1 from "../assets/img/testimonial-1.jpg";
import testimonial2 from "../assets/img/testimonial-2.jpg";
import testimonial3 from "../assets/img/testimonial-3.jpg";
import testimonial4 from "../assets/img/testimonial-4.jpg";

const TeamAndTestimonials = () => {
    const teamMembers = [
        {
            img: team1,
            name: "Lucifer Jhones",
            role: "Photographer",
            delay: "0.1s",
        },
        {
            img: team2,
            name: "Jesse Joslin",
            role: "Videographer",
            delay: "0.3s",
        },
        {
            img: team3,
            name: "Richard Archer",
            role: "Retoucher",
            delay: "0.1s",
        },
        {
            img: team4,
            name: "April Ryan",
            role: "Editor",
            delay: "0.3s",
        },
    ];

    const testimonials = [
        { img: testimonial1, name: "Client Name", profession: "Profession" },
        { img: testimonial2, name: "Client Name", profession: "Profession" },
        { img: testimonial3, name: "Client Name", profession: "Profession" },
        { img: testimonial4, name: "Client Name", profession: "Profession" },
    ];

    return (
        <>
            {/* Team Start */}
            <div className=" px-0 py-5 bg-lights">
                <div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: "500px" }}
                >
                    <p className="text-primarys text-uppercase mb-2">Our Team</p>
                    <h1 className="display-6 mb-0">
                        Creative Photographer And Videographer
                    </h1>
                </div>

                <div className="row g-0">
                    {teamMembers.map((member, i) => {
                        const isReverse =
                            i % 2 === 1 ? "flex-sm-row-reverse flex-lg-row" : i === 2 ? "flex-lg-row-reverse" : "flex-sm-row";
                        return (
                            <div
                                className="col-lg-6 wow fadeIn"
                                data-wow-delay={member.delay}
                                key={i}
                            >
                                <div className={`row g-0 ${isReverse}`}>
                                    <div className="col-sm-6">
                                        <div className="team-img position-relative">
                                            <img className="img-fluid" src={member.img} alt={member.name} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="h-100 p-5 d-flex flex-column justify-content-between">
                                            <div className="mb-3">
                                                <h4>{member.name}</h4>
                                                <span>{member.role}</span>
                                            </div>
                                            <p>
                                                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                                                sed stet lorem sit clita duo
                                            </p>
                                            {/* <div className="d-flex">
                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default TeamAndTestimonials;
