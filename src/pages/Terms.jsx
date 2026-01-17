import React from "react";

const Terms = () => {
    return (
        <>
            {/* PAGE HEADER */}
            <div className="container-fluid bg-lights py-5 mb-5">
                <div className="container text-center py-5">
                    <p className="text-primarys text-uppercase mb-2">
                        Legal
                    </p>
                    <h1 className="display-4">
                        Terms & Conditions
                    </h1>
                </div>
            </div>

            {/* CONTENT */}
            <div className="container py-5">
                <h4>1. Acceptance of Terms</h4>
                <p>
                    By accessing or using our services, you agree to be bound
                    by these Terms & Conditions. If you do not agree, please
                    do not use our services.
                </p>

                <h4>2. Services</h4>
                <p>
                    We provide photography and media-related services as
                    described on our website. All services are subject to
                    availability.
                </p>

                <h4>3. User Responsibilities</h4>
                <p>
                    You agree to provide accurate information and not misuse
                    our services for any illegal activities.
                </p>

                <h4>4. Intellectual Property</h4>
                <p>
                    All content, images, and media belong to us unless stated
                    otherwise. Unauthorized use is prohibited.
                </p>

                <h4>5. Changes to Terms</h4>
                <p>
                    We reserve the right to update these terms at any time
                    without prior notice.
                </p>
            </div>
        </>
    );
};

export default Terms;
