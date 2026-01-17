import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/productsData";





const ProductProfile = () => {
const { id } = useParams();
const product = productsData.find(p => p.id === id);

    if (!product) {
        return <h2 className="text-center py-5">Product Not Found</h2>;
    }

    const phoneNumber = "919999999999"; // apna number daalna
    const whatsappMessage = `Hello, I am interested in ${product.title}`;

    return (
        <>
            {/* PAGE HEADER */}
            <div className="container-fluid bg-lights py-5 mb-5">
                <div className="container text-center py-5">
                    <p className="text-primarys text-uppercase mb-2">
                        Product Details
                    </p>
                    <h1 className="display-5">
                        {product.title}
                    </h1>
                </div>
            </div>

            {/* PRODUCT PROFILE */}
            <div className=" py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">

                        {/* IMAGE */}
                        <div className="col-lg-6">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="img-fluid bg-light p-3"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="col-lg-6">
                            <h2 className="mb-2">{product.title}</h2>
                            <h4 className="text-primarys mb-3">{product.price}</h4>

                            <p className="fw-semibold mb-3">
                                {product.shortDesc}
                            </p>

                            <p className="mb-4">
                                {product.longDesc}
                            </p>

                            <div className="row g-3 mb-4">
                                <div className="col-sm-6">
                                    <strong>Duration:</strong> {product.duration}
                                </div>
                                <div className="col-sm-6">
                                    <strong>Delivery Time:</strong> {product.deliveryTime}
                                </div>
                                <div className="col-sm-6">
                                    <strong>Output:</strong> {product.photosCount}
                                </div>
                                <div className="col-sm-6">
                                    <strong>Location:</strong> {product.location}
                                </div>
                            </div>

                            <h5 className="mb-3">What’s Included</h5>
                            <ul className="list-unstyled mb-4">
                                {product.features.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        <i className="fa fa-check text-primarys me-2"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="d-flex gap-3 flex-wrap">
                                {/* WHATSAPP */}
                                <a
                                    // href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                    href="/signin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success py-3 px-4"
                                >
                                    <i className="fab fa-whatsapp me-2"></i>
                                    WhatsApp
                                </a>

                                {/* CALL */}
                                <a
                                    // href={`tel:${phoneNumber}`}
                                    href="/signin"
                                    className="btn btn-primarys py-3 px-4"
                                >
                                    <i className="fa fa-phone-alt me-2"></i>
                                    Call Now
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductProfile;
