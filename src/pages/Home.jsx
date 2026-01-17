import hero1 from '../assets/img/hero-1.jpg';
import hero2 from '../assets/img/hero-2.jpg';
import hero3 from '../assets/img/hero-3.jpg';
import hero4 from '../assets/img/hero-4.jpg';
import about1 from '../assets/img/about-1.jpg';
import about2 from '../assets/img/about-2.jpg';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesAndProjects from '../components/ServicesAndProjects';
import TeamAndTestimonials from '../components/TeamAndTestimonials';
import service1 from "../assets/img/service-1.jpg";
import service2 from "../assets/img/service-2.jpg";
import service3 from "../assets/img/service-3.jpg";
import service4 from "../assets/img/service-4.jpg";


const Home = () => {
    const services = [
        { img: service1, title: "Photography" },
        { img: service2, title: "Videography" },
        { img: service3, title: "Editing" },
        { img: service4, title: "Retouching" },
    ];

    return (
        <>
            {/* HERO */}
            <div id='home' className="container-fluid hero-header bg-lights py-5 mb-0">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <p className="text-primarys text-uppercase mb-2 animated slideInDown">
                                Welcome To Photozone
                            </p>
                            <h1 className="display-4 mb-3 animated slideInDown">
                                Wedding And Portrait Studio Based in New York
                            </h1>
                            <p className="animated slideInDown">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                            </p>
                            <a href="/products" className="btn btn-primarys py-3 px-4">
                                Explore More
                            </a>
                        </div>

                        <div className="col-lg-6 animated fadeIn">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid bg-white p-3 w-100 mb-3" src={hero1} alt="" />
                                    <img className="img-fluid bg-white p-3 w-50" src={hero3} alt="" />
                                </div>
                                <div className="col-6">
                                    <img className="img-fluid bg-white p-3 w-50 mb-3" src={hero4} alt="" />
                                    <img className="img-fluid bg-white p-3 w-100" src={hero2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICES */}
            <div id='services' className=" bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5 wow fadeInUp">
                        <p className="text-primarys text-uppercase mb-2">Our Services</p>
                        <h1 className="display-6 mb-4">We Provide Best Professional Services</h1>
                    </div>

                    <div className="row g-4">
                        {services.map((service, i) => (
                            <div className="col-lg-3 col-md-6 wow fadeInUp" key={i}>
                                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                                    <img
                                        className="img-fluid"
                                        src={service.img}
                                        alt={service.title}
                                    />
                                    <div className="text-center p-4">
                                        <h4>{service.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

            {/* About  */}
            <div id='about' className=" py-5 bg-lights">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-3 img-twice position-relative h-100">
                                <div className="col-6">
                                    <img className="img-fluid bg-light p-3" src={about1} alt="" />
                                </div>
                                <div className="col-6 align-self-end">
                                    <img className="img-fluid bg-light p-3" src={about2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <p className="text-primarys text-uppercase mb-2">About Us</p>
                                <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <div className="row g-2 mb-4">
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primarys me-3"></i>Quality Products
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primarys me-3"></i>Custom Products
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primarys me-3"></i>Online Order
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primarys me-3"></i>Home Delivery
                                    </div>
                                </div>
                                <a className="btn btn-primarys py-3 px-5" href="/about">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhyChooseUs />
            <ServicesAndProjects />
            <TeamAndTestimonials />
        </>
    );
};

export default Home;
