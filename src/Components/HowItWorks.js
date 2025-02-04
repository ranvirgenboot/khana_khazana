import React from "react";

const HowItWorks = () => {
  return (
    <div>
      <section className="advance_feature_section row_am">
        <div className="af_innner">
          {/* side element left  */}
          {/* container */}
          <div className="container">
            {/* section title */}
            <div className="section_title">
              <h2 style={{ fontWeight: "bold", fontSize: "3rem" }}>
                How it Works
              </h2>
              <p>
                Order your favorite food in minutes! Enjoy a seamless experience
                with our intuitive solution: browse, select, order, track, and
                receive your food with ease and speed!
              </p>
            </div>
            {/* listing */}
            <div className="af_listing">
              {/* row */}
              <div className="row">
                {/* collom */}
                <div className="col-md-12">
                  {/* inner section */}
                  <div className="listing_inner">
                    {/* blok */}
                    <div
                      className="af_block aos-init"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                    >
                      <div className="img">
                        <img
                          src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235499/how1_hpepcp.webp"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <h5 style={{ fontWeight: "bold" }}>
                          Download App &amp; create a free account{" "}
                        </h5>
                        <p>
                          {" "}
                          Get started with our food delivery app! Download,
                          create a free account, and start ordering instantly!
                        </p>
                      </div>
                      <div className="process_num ">01</div>
                    </div>
                    {/* blok */}
                    <div
                      className="af_block aos-init"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                    >
                      <div className="img">
                        <img
                          src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235499/how2_a38irs.webp"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <h5 style={{ fontWeight: "bold" }}>
                          {" "}
                          Order your favourite food in no time
                        </h5>
                        <p>
                          Choose your favorite dish from the restaurant you love
                          and place your order with just a few clicks!
                        </p>
                      </div>
                      <div className="process_num">02</div>
                    </div>
                    {/* blok */}
                    <div
                      className="af_block aos-init"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                    >
                      <div className="img">
                        <img
                          src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235499/how3_nu2jxc.webp"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <h5 style={{ fontWeight: "bold" }}>
                          {" "}
                          Get it delivered directly to your home, effortlessly{" "}
                        </h5>
                        <p>
                          {" "}
                          Relax and enjoy! Your favorite food is delivered right
                          to your doorstep, hassle-free and convenient!
                        </p>
                      </div>
                      <div className="process_num">03</div>
                    </div>
                  </div>
                  {/* app buttons */}
                  <div className="ctr_app_btn_block">
                    <ul className="app_btn">
                      <li>
                        <a href="">
                          <img
                            className="blue_img"
                            src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235510/googleplay_p8jsyj.webp"
                            alt="image"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img
                            className="blue_img"
                            src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235403/appstorebtn_c9rnht.webp"
                            alt="image"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* row */}
            </div>
            {/* listing */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
