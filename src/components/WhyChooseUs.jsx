import { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50); // 50ms interval
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
};

const WhyChooseUs = () => {
  return (
    <div className=" py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <p className="text-primarys text-uppercase mb-2">Why Choose Us!</p>
          <h1 className="display-6 mb-5">
            The Leading Photo Studio In The Country
          </h1>
        </div>

        <div className="row g-3">
          <div
            className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="fact-item bg-light text-center h-100 p-5">
              <h1 className="display-2 text-primarys mb-3">
                <Counter end={35} />
              </h1>
              <h4 className="mb-3">Award Winning</h4>
              <span>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                stet lorem sit clita duo justo
              </span>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="fact-item bg-light text-center h-100 p-5">
              <h1 className="display-2 text-primarys mb-3">
                <Counter end={45} />
              </h1>
              <h4 className="mb-3">Years Experience</h4>
              <span>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                stet lorem sit clita duo justo
              </span>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="fact-item bg-light text-center h-100 p-5">
              <h1 className="display-2 text-primarys mb-3">
                <Counter end={12345} />
              </h1>
              <h4 className="mb-3">Happy Clients</h4>
              <span>
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                stet lorem sit clita duo justo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
