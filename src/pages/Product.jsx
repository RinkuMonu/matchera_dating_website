import React from "react";
import { Link } from "react-router-dom";
import product1 from "../assets/img/service-1.jpg";
import product2 from "../assets/img/service-2.jpg";
import product3 from "../assets/img/service-3.jpg";
import product4 from "../assets/img/service-4.jpg";
import product5 from "../assets/img/hero-1.jpg";
import product6 from "../assets/img/hero-2.jpg";

const Products = () => {
const products = [
  { id: 1, img: product1, title: "Aarohi Sharma", price: "₹299" },   
  { id: 2, img: product2, title: "Rohan Mehta", price: "₹199" },    
  { id: 3, img: product3, title: "Simran Kaur", price: "₹149" },    
  { id: 4, img: product4, title: "Arjun Verma", price: "₹99" },     
  { id: 5, img: product5, title: "Neha Singh", price: "₹399" },     
  { id: 6, img: product6, title: "Karan Malhotra", price: "₹249" }, 
];

    return (
        <>
            {/* PAGE HEADER */}
            <div className="container-fluid bg-lights py-5 mb-5">
                <div className="container py-5 text-center">
                    <p className="text-primarys text-uppercase mb-2 animated slideInDown">
                        Our Products
                    </p>
                    <h1 className="display-4 animated slideInDown">
                        Professional Photography Packages
                    </h1>
                </div>
            </div>

            {/* PRODUCTS SECTION */}
            <div className=" py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp">
                        <p className="text-primarys text-uppercase mb-2">
                            Latest Products
                        </p>
                        <h1 className="display-6 mb-4">
                            Choose Your Perfect Package
                        </h1>
                    </div>

                    <div className="row g-4">
                        {products.map((product) => (
                            <div
                                className="col-lg-4 col-md-6 wow fadeInUp"
                                key={product.id}
                            >
                                <div className="service-item d-flex flex-column bg-white p-3 pb-0 h-100">
                                    <img
                                        className="img-fluid"
                                        src={product.img}
                                        alt={product.title}
                                    />
                                    <div className="text-center p-4">
                                        <h4 className="mb-2">
                                            {product.title}
                                        </h4>
                                        <h5 className="text-primarys mb-3">
                                            {product.price}
                                        </h5>

                                        {/* PROFILE PAGE LINK */}
                                        <Link
                                            to={`/product/${product.id}`}
                                            className="btn btn-primarys py-2 px-4"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Products;
