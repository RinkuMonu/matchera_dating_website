import React from "react";

const Plans = ({setHasActivePlan }) => {
    const plans = [
        {
            id: 1,
            name: "Basic Plan",
            price: "$99",
            duration: "Per Session",
            desc: "Perfect for small shoots & quick projects.",
            features: [
                "2 Hours Coverage",
                "30+ Edited Photos",
                "Basic Retouching",
                "Online Delivery",
                "1 Revision"
            ]
        },
        {
            id: 2,
            name: "Standard Plan",
            price: "$199",
            duration: "Per Session",
            desc: "Most popular plan for portraits & events.",
            features: [
                "4 Hours Coverage",
                "80+ Edited Photos",
                "Advanced Retouching",
                "Online Gallery",
                "2 Revisions"
            ],
            popular: true
        },
        {
            id: 3,
            name: "Premium Plan",
            price: "$399",
            duration: "Per Session",
            desc: "Best for weddings & large events.",
            features: [
                "Full Day Coverage",
                "300+ Edited Photos",
                "Premium Retouching",
                "Photo Album Included",
                "Unlimited Revisions"
            ]
        }
    ];
      const buyPlan = () => {
    setHasActivePlan(true);
  };


    return (
        <>
            {/* PAGE HEADER */}
            <div className="container-fluid bg-lights py-5 mb-5">
                <div className="container text-center py-5">
                    <p className="text-primarys text-uppercase mb-2 animated slideInDown">
                        Our Plans
                    </p>
                    <h1 className="display-4 animated slideInDown">
                        Affordable Pricing Plans
                    </h1>
                </div>
            </div>

            {/* PLANS SECTION */}
            <div className=" py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp">
                        <p className="text-primarys text-uppercase mb-2">
                            Pricing Plans
                        </p>
                        <h1 className="display-6 mb-4">
                            Choose The Best Plan For You
                        </h1>
                    </div>

                    <div className="row g-4">
                        {plans.map(plan => (
                            <div className="col-lg-4 col-md-6 wow fadeInUp" key={plan.id}>
                                <div
                                    className={`bg-white h-100 p-4 text-center border 
                                    ${plan.popular ? "border-primary" : ""}`}
                                >
                                    {plan.popular && (
                                        <span className="badge bg-primarys mb-3">
                                            Popular
                                        </span>
                                    )}

                                    <h3 className="mb-3">{plan.name}</h3>
                                    <h1 className="display-6 text-primarys">
                                        {plan.price}
                                    </h1>
                                    <span className="text-muted">
                                        {plan.duration}
                                    </span>

                                    <p className="my-4">
                                        {plan.desc}
                                    </p>

                                    <ul className="list-unstyled mb-4">
                                        {plan.features.map((item, index) => (
                                            <li key={index} className="mb-2">
                                                <i className="fa fa-check text-primarys me-2"></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        // href="tel:919999999999"
                                        className="btn btn-primarys py-3 px-5"
                                        onClick={buyPlan} 
                                    >
                                        Choose Plan
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Plans;
