import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AOS_Component = () => {
  useEffect(() => {
    AOS.init({
      
    });
  }, []);

  
  return (
    <section className="row_am features_section" id="why_sec">
    {/* container start */}
    <div className="container">
      {/* section title */}
      <div
  className="section_title aos-init"
  data-aos="fade-up"
  
  data-aos-duration={2000}
  data-aos-delay={100}
>
  {/* h2 */}
  <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>Why Choose Us</h1>
  {/* p */}
  <h5 style={{ fontWeight: "semi-bold", fontSize: "1.7rem" }}>Bringing The True Flavors Of Authentic Indian Cuisine To You</h5>
  <p style={{ textAlign: "center" }}>
    Khana Khazana brings India’s authentic flavor to Paris and all in France.
    Our advanced food delivery platform delivers authentic Indian cuisine right
    to your doorstep, offering everything from curries to biryanis with a
    fragrant aroma. We’ve got a passionate team that aims to achieve culinary
    excellence and make Indian food accessible to all.
  </p>
</div>

      <div className="feature_detail">
        {/* side element left  */}
        {/* feature box left */}
        <div className="left_data feature_box">
          {/* feature box */}
          <div
            className="data_block  aos-init"
            data-aos="fade-right"
            data-aos-duration={1500}
            style={{backgroundColor: "#faf9f5"}}
          >
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235507/whyicon1_lsc4hd.webp"
                alt="image"
              />
            </div>
            <div className="text">
              <h6>Wide Variety</h6>
              <p>
                Access a diverse menu of authentic cuisines at your
                fingertips.
              </p>
            </div>
          </div>
          <div
            className="data_block color1 aos-init"
            data-aos="fade-right"
            data-aos-duration={1500}
            style={{backgroundColor: "#faf9f5"}}
          >
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235507/whyicon4_ffvoxk.webp"
                alt="image"
              />
            </div>
            <div className="text">
              <h6>EXCLUSIVE Coupons</h6>
              <p>
                Unlock special discounts and offers to save on your
                next meal.
              </p>
            </div>
          </div>
          {/* feature box */}
          <div
            className="data_block color2 aos-init"
            data-aos="fade-right"
            data-aos-duration={1500}
            style={{backgroundColor: "#faf9f5"}}
          >
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235507/whyicon2_dgnfjk.webp"
                alt="image"
              />
            </div>
            <div className="text">
              <h6>Easy Payment Options</h6>
              <p>
                Choose from multiple secure payment methods for
                convenience.
              </p>
            </div>
          </div>
        </div>
        {/* feature box right */}
        <div className="right_data feature_box">
          {/* feature box */}
          <div
            className="data_block color3 aos-init"
            data-aos="fade-left"
            data-aos-duration={1500}
            style={{backgroundColor: "#faf9f5"}}
          >
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235507/whyicon3_snxbb3.webp"
                alt="image"
              />
            </div>
            <div className="text">
              <h6>Chat With Delivery Partner</h6>
              <p>
                Directly communicate with your delivery partner for
                updates or special requests.
              </p>
            </div>
          </div>
          <div
            className="data_block color3 aos-init"
            data-aos="fade-left"
            data-aos-duration={1500}
            style={{backgroundColor: "#faf9f5"}}
          >
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235507/whyicon1_lsc4hd.webp"
                alt="image"
              />
            </div>
            <div className="text">
              <h6>Real Time Delivery</h6>
              <p>Track your order live from restaurant to doorstep</p>
            </div>
          </div>
          {/* feature box */}
          <div
            className="data_block color4 aos-init"
            data-aos="fade-left"
            data-aos-duration={1500}
            style={{backgroundColor: "#faf9f5"}}
          >
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235507/whyicon4_ffvoxk.webp"
                alt="image"
              />
            </div>
            <div className="text">
              <h6>Seamless Delivery</h6>
              <p>
                Enjoy hot and fresh food delivered quickly to your
                door.
              </p>
            </div>
          </div>
        </div>
        {/* feature image */}
        <div
          className="feature_img aos-init"
          // data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-delay={100}
        >
          <img
            src="
https://res.cloudinary.com/dx9kqohjf/image/upload/v1737539843/k2_cjt7bb.png"
            alt="image"
          />
        </div>
      </div>
    </div>
    {/* container end */}
  </section>
  );
};

export default AOS_Component;
