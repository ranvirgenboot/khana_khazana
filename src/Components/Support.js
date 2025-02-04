import React from 'react'

const Support = () => {
  return (
    <div>
                  <section className="cta_section new white_text" id="support_sec">
              {/* container start */}
              <div className="container">
                <div className="cta_box" style={{ backgroundColor: "white" }}>
                  <div className="element">
                    <span className="element1">
                      {" "}
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235497/element_white_3_tjsyyy.webp"
                        alt="image"
                      />{" "}
                    </span>
                    <span className="element2">
                      {" "}
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235497/element_white_4_esgo39.webp"
                        alt="image"
                      />{" "}
                    </span>
                  </div>
                  <div className="left">
                    {/* section title */}
                    <div
                      className="section_title aos-init"
                      data-aos="fade-in"
                      data-aos-duration={1500}
                      data-aos-delay={100}
                    >
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235496/customer-icon_v8cesz.webp"
                        className="customer_icon"
                        alt="image"
                        style={{ backgroundColor: "white", marginTop: "-13px" }}
                      />
                      {/* h2 */}
                      <h3 style={{ color: "black" , fontSize: "2rem" , fontWeight:"bold" }}>Need support?</h3>
                      {/* p */}
                    </div>
                  </div>
                  {/* cta buttons */}
                  <div class="right">
                    <div class="btn_block ">
                      <a
                        href="tel:3489390172"
                        class="btn puprple_btn aos-init aos-animate call_btn"
                      >
                        {" "}
                        Call us now
                      </a>
                      <a
                        href="mailto:Khanakhazana@gmail.com"
                        class="btn aos-init aos-animate email_btn"
                      >
                        {" "}
                        Email us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* container end */}
            </section>
    </div>
  )
}

export default Support
