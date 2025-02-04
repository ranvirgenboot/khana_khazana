import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div
          className="top_footer"
          id="contact"
          style={{ backgroundColor: "#21752e" }}
        >
          {/* container start */}
          <div className="container">
            {/* row start */}
            <div className="row">
              {/* footer link 1 */}
              <div className="col-lg-5 col-md-6 col-12 ">
                <div className="abt_side" style={{ marginTop: "-20px" }}>
                  <div className="logo">
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737631165/khana-logo-c_2__processed_p7nbfy.png"
                      alt="image"
                      style={{ width: 200, height: 90 }}
                    />
                  </div>
                  <p
                    style={{
                      marginTop: "-40px",
                      textAlign: "start",
                      marginLeft: 180,
                    }}
                  >
                    <br />
                    Location: Khana Khazana
                    <br />
                    Contact: 3489390172
                    <br />
                    Email: Khanakhazana@gmail.com
                  </p>
                </div>
              </div>

              {/* footer link 2 */}
              <div className="col-lg-2 col-md-6 col-12">
                <div className="links" style={{ textAlign: "start" }}>
                  <h5>Quick Links</h5>
                  <ul style={{ marginLeft: "-20px" }}>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a
                        href="https://khanakhazana.genaiapp.io/page/privacy-policy"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://khanakhazana.genaiapp.io/page/terms-conditions"
                        target="_blank"
                      >
                        Terms And Conditions
                      </a>
                    </li>
                    <li>
                      <a href="mailto:Khanakhazana@gmail.com">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* footer link 3 */}
              <div className="col-lg-2 col-md-6 col-12">
                <div className="links">
                  <h5>Social Links</h5>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      marginLeft: 30,
                    }}
                  >
                    {/* Instagram Icon */}
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      style={{
                        display: "inline-block",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.children[0].style.filter = "invert(1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.children[0].style.filter = "invert(0)")
                      }
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=Iatym1CIDVkh&format=png&color=000000"
                        style={{ width: 30, height: 30 }}
                      />
                    </a>
                    {/* Twitter Icon */}
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      style={{
                        display: "inline-block",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.children[0].style.filter = "invert(1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.children[0].style.filter = "invert(0)")
                      }
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=437&format=png&color=000000"
                        style={{ width: 30, height: 30 }}
                      />
                    </a>
                    {/* Facebook Icon */}
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      style={{
                        display: "inline-block",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.children[0].style.filter = "invert(1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.children[0].style.filter = "invert(0)")
                      }
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=118491&format=png&color=000000"
                        style={{ width: 30, height: 30 }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* footer link 4 */}
              <div className="col-lg-3 col-md-6 col-12">
                <h5>Download Links</h5>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                    marginTop: "-20px",
                    marginLeft: "40px",
                  }}
                >
                  {/* First Image of Google */}
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737358272/googl2_gmchou.jpg"
                    style={{ width: 90, height: 90 }}
                    alt="Google Image"
                  />
                  {/* First Image of Apple */}
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737357352/apple_c5bz53.jpg"
                    style={{ width: 90, height: 90 }}
                    alt="Apple Image"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 30,
                    marginLeft: "40px",
                  }}
                >
                  {/* Second Image of Google */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play Store"
                    style={{ width: 80, height: 50 }}
                  />
                  {/* Second Image of Apple */}
                  <img
                    src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737369241/th_4_ihc8sf.jpg"
                    alt="Apple Store"
                    style={{ width: 80, height: 25 }}
                  />
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
          {/* container end */}
          {/* last footer */}
          <div
            className="bottom_footer"
            style={{ borderTop: "solid white 1px" }}
          >
            {/* container start */}
            <div className="container">
              {/* row start */}
              <div className="row"></div>
              {/* row end */}
              <div
                className="col-md-4"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  marginLeft: 350,
                }}
              >
                <p>Copyrights @ 2025 Khana Khazana </p>
              </div>
            </div>
            {/* container end */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
