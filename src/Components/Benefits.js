import React from "react";

function Benefits() {
  return (
    <div>
      <section className="winwin_section row_am" id="benefits_sec">
        <div className="container">
          {/* section title */}
          <div className="section_title">
            <span className="title_badge">benefits</span>
            <h2 style={{ fontWeight: "bold", fontSize: "3rem" }}>
              Delivering success for restaurants &amp; Foodies
            </h2>
            <p>
              Connecting restaurants with hungry customers, fostering growth,
              convenience, and mouth-watering experiences that satisfy cravings
              and bring people together!
            </p>
          </div>
          {/* block list */}
          <div className="win_listing">
            <div className="row">
              <div className="col-md-12">
                <div className="listing_inner">
                  {/* blok */}
                  <div
                    className="win_block aos-init"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                  >
                    <div className="img">
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737636838/k6_iqtbxc.png"
                        alt="image"
                      />
                    </div>
                    <div className="text">
                      <h4 style={{ fontWeight: "bold" }}>Merchant Benefits</h4>
                      <div>
                        <p>
                          {" "}
                          Simplify tasks, automate workflows, and gain insights
                          to optimize performance, reduce costs, and boost
                          customer satisfaction effortlessly!
                        </p>
                        <ul className="win_list">
                          <li>
                            <div className="icon">
                              <span>
                                <i className="icofont-check-circled" />
                              </span>
                            </div>
                            <div className="li_text">
                              <p>Increased Visibility</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span>
                                <i className="icofont-check-circled" />
                              </span>
                            </div>
                            <div className="li_text">
                              <p>Operational Efficiency</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span>
                                <i className="icofont-check-circled" />
                              </span>
                            </div>
                            <div className="li_text">
                              <p>Customer Insights</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <span>
                                <i className="icofont-check-circled" />
                              </span>
                            </div>
                            <div className="li_text">
                              <p>Competitive Advantage</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* blok */}
                  <div
                    className="win_block aos-init"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                  >
                    <div className="img">
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235500/win2_segz8u.webp"
                        alt="image"
                      />
                    </div>
                    <div className="text">
                      <h4 style={{ fontWeight: "bold" }}>Customer Benefits</h4>
                      <p>
                        Place orders in no time, customize to your taste, and
                        track in real-time. Our mobile app makes food ordering
                        fast, easy, and delightfully convenient!
                      </p>
                      <ul className="win_list">
                        <li>
                          <div className="icon">
                            <span>
                              <i className="icofont-check-circled" />
                            </span>
                          </div>
                          <div className="li_text">
                            <p>Easy Ordering</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span>
                              <i className="icofont-check-circled" />
                            </span>
                          </div>
                          <div className="li_text">
                            <p>Wide variety of Indian Cuisine</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span>
                              <i className="icofont-check-circled" />
                            </span>
                          </div>
                          <div className="li_text">
                            <p> Fast delivery</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span>
                              <i className="icofont-check-circled" />
                            </span>
                          </div>
                          <div className="li_text">
                            <p>Exclusive offers</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Benefits;
