import React from "react";

function Banner() {
  return (
    <div>
      <section className="banner_section" id="home_sec">
        {/* side element left  */}
        {/* container start */}
        <div className="container">
          {/* row start */}
          <div className="row">
            <div
              className="col-md-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              {/* banner text */}
              <div className="banner_text">
                {/* h1 */}
                <h1>Khana Khazana </h1>
                <h3 style={{ color: "#fb5b29" }}>
                  Your No. 1 Authentic Indian Food Delivery App in France
                </h3>
                {/* p */}
                <p>
                  Order authentic Indian cuisine– authentic flavors from every
                  corner of India, delivered to your doorstep in just a tap
                </p>
              </div>
              {/* app buttons */}
              <ul className="app_btn">
                <li>
                  <button
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      fontSize: 16,
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                      borderRadius: 5,
                      width: 150,
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#fb5b29")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "black")
                    }
                  >
                    Click To Order !
                  </button>
                </li>
              </ul>
            </div>
            {/* banner image start */}
            <div className="col-md-12">
              <div className="hero_img">
                {/* hero image for desktop view */}
                <div className="desktop">
                  <img
                    src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737721213/K1_1_cmqrh9.png"
                    alt="image"
                  />
                </div>
                {/* hero image for mobile view */}
                <div className="mobile_view">
                  <img
                    src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737721213/K1_1_cmqrh9.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            {/* banner image end */}
          </div>
          {/* row end */}
        </div>
        {/* container end */}
      </section>
    </div>
  );
}

export default Banner;
