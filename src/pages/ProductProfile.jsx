import React from "react";
import { useParams } from "react-router-dom";
import product1 from "../assets/img/service-1.jpg";
import product2 from "../assets/img/service-2.jpg";
import product3 from "../assets/img/service-3.jpg";

const productsData = [
    {
        id: "1",
        title: "Wedding Photography",
        img: product1,
        price: "$299",
        shortDesc: "Full day professional wedding photography coverage.",
        longDesc:
            "Our wedding photography package is designed to capture every emotion, detail, and moment of your special day. From candid shots to posed portraits, we ensure timeless memories with professional editing and premium quality output.",
        duration: "8 – 10 Hours",
        deliveryTime: "7 – 10 Working Days",
        photosCount: "300+ Edited Photos",
        location: "On-site / Destination",
        features: [
            "High-resolution edited images",
            "Professional lighting setup",
            "Candid & traditional photography",
            "Online gallery access",
            "Custom photo album option"
        ]
    },
    {
        id: "2",
        title: "Portrait Shoot",
        img: product2,
        price: "$199",
        shortDesc: "Creative portrait photography for individuals & couples.",
        longDesc:
            "Our portrait shoot focuses on personality, mood, and aesthetics. Whether studio or outdoor, we guide you with poses, lighting, and styling to deliver stunning portraits suitable for personal, professional, or social media use.",
        duration: "2 – 3 Hours",
        deliveryTime: "5 – 7 Working Days",
        photosCount: "50+ Edited Photos",
        location: "Studio / Outdoor",
        features: [
            "Professional retouching",
            "Multiple outfit changes",
            "Studio & natural light",
            "High-quality color grading",
            "Print-ready images"
        ]
    },
    {
        id: "3",
        title: "Video Editing",
        img: product3,
        price: "$149",
        shortDesc: "Cinematic video editing with modern effects.",
        longDesc:
            "We provide professional video editing services including cinematic cuts, color grading, transitions, background music, and storytelling. Ideal for weddings, events, YouTube content, and promotional videos.",
        duration: "Project Based",
        deliveryTime: "3 – 5 Working Days",
        photosCount: "Final HD / 4K Video",
        location: "Remote Service",
        features: [
            "Cinematic transitions",
            "Color correction & grading",
            "Background music sync",
            "Text & logo animation",
            "Multiple revisions"
        ]
    }
];


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
