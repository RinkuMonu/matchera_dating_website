import React from "react";

const Cancellation = () => {
    return (
        <>
            {/* PAGE HEADER */}
            <div className="container-fluid bg-lights py-5 mb-5">
                <div className="container text-center py-5">
                    <p className="text-primarys text-uppercase mb-2">
                        Policy
                    </p>
                    <h1 className="display-4">
                        Cancellation & Refund Policy
                    </h1>
                </div>
            </div>

            {/* CONTENT */}
            <div className="container py-5">
                <h4>1. Cancellation</h4>
                <p>
                    Bookings can be cancelled up to 48 hours before the
                    scheduled service for a full refund.
                </p>

                <h4>2. Refund Policy</h4>
                <p>
                    Refunds will be processed within 7–10 business days after
                    cancellation approval.
                </p>

                <h4>3. No Refund Cases</h4>
                <p>
                    No refunds will be provided for last-minute cancellations
                    or no-shows.
                </p>

                <h4>4. Service Rescheduling</h4>
                <p>
                    Customers may reschedule once without extra charges,
                    subject to availability.
                </p>
            </div>
        </>
    );
};

export default Cancellation;
