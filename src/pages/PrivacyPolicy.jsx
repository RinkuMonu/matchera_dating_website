import React from "react";

const PrivacyPolicy = () => {
    return (
        <>
            {/* PAGE HEADER */}
            <div className="container-fluid bg-lights py-5 mb-5">
                <div className="container text-center py-5">
                    <p className="text-primarys text-uppercase mb-2">
                        Legal
                    </p>
                    <h1 className="display-4">
                        Privacy Policy
                    </h1>
                </div>
            </div>

            {/* CONTENT */}
            <div className="container py-5">
                <h4>1. Information We Collect</h4>
                <p>
                    We may collect personal information such as name, email,
                    phone number, and payment details.
                </p>

                <h4>2. How We Use Your Information</h4>
                <p>
                    Your information is used to provide services, communicate
                    updates, and improve our offerings.
                </p>

                <h4>3. Data Protection</h4>
                <p>
                    We implement security measures to protect your personal
                    data from unauthorized access.
                </p>

                <h4>4. Sharing of Information</h4>
                <p>
                    We do not sell or rent your personal information to third
                    parties.
                </p>

                <h4>5. Cookies</h4>
                <p>
                    Our website may use cookies to enhance user experience.
                </p>
            </div>
        </>
    );
};

export default PrivacyPolicy;
