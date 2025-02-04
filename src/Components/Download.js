import React from "react";

const Download = () => {
  return (
    <div>
      <section className="row_am download_app" id="download_sec">
        {/* Task Block start */}
        <div
          className="task_block aos-init"
          data-aos="fade-up"
          data-aos-duration={1500}
          style={{ top: 120 }}
        >
          {/* background blure shapes */}
          <div className="blure_shape bs_1"> </div>
          <div className="blure_shape bs_2"> </div>
          {/* row start */}
          <div className="row">
            <div className="col-md-6">
              {/* text */}
              <div className="task_text">
                {/* section title */}
                <div
                  className="section_title white_text aos-init"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-delay={100}
                >
                  <span className="title_badge">Download</span>
                  <h2 style={{ fontWeight: "bold", fontSize: "3rem" }}>
                    Download app to enjoy 4500+ foods{" "}
                  </h2>
                  <p>
                    Download our mobile app for a seamless food ordering
                    experience, lightning-fast delivery, and incredible offers
                    tailored just for you!
                  </p>
                </div>
                {/* app buttons */}
                <ul
                  className="app_btn aos-init"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <li>
                    <a href="">
                      <img
                        className="blue_img"
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235497/black_google_play_k3phkx.webp"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="blue_img"
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235497/black_appstore_w9qwjk.webp"
                        alt="image"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              {/* images */}
              <div
                className="task_img aos-init"
                data-aos="fade-in"
                data-aos-duration={1500}
              >
                <div className="frame_img">
                  <img
                    src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737539936/k3_lczyfq.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
        </div>
        {/* app Block end */}
      </section>
    </div>
  );
};

export default Download;
