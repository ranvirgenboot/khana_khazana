import React from 'react'
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useState, useEffect } from 'react';

const Count = () => {

    const text = {
        fontSize: "40px",
        alignItems: "center",
        color: "white",
      };
    
      function HTMLContent({ last }) {
        const count = useMotionValue(0); 
        const rounded = useTransform(count, (value) => Math.round(value)); 
        const [scrollPos, setScrollPos] = useState(0); 
      
        const handleScroll = () => {
          setScrollPos(window.scrollY); 
        };
      
        useEffect(() => {
          window.addEventListener("scroll", handleScroll); 
      
          return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup scroll listener
          };
        }, []);
      
        useEffect(() => {
          if (scrollPos > 200) {
            // Animate the count value when scroll position > 200
            animate(count, last, { duration: 1 });
          } else {
            // Reset the count value when scroll position <= 200
            animate(count, 0, { duration: 0.5 });
          }
        }, [scrollPos, last, count]);
      
        return <motion.pre style={text}>{rounded}</motion.pre>;
      }
      
    

  return (
    <div>
      
      <section className="row_am usp_section">
              {/* background blure shapes */}
              <div className="blure_shape bs_1"> </div>
              <div className="blure_shape bs_2"> </div>
              <div className="inner_sec" id="counter">
                {/* container start */}
                <div className="container">
                  {/* row start */}
                  <div className="row">
                    {/* box 1 */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="usp_box">
                        <div className="usp_icon">
                          <img
                            src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235509/usp1_rhhpvz.webp"
                            alt="image"
                          />
                        </div>
                        <div style={{ height: "88px" }}>
                          <br />
                          <div style={{ display: "flex", fontWeight: "600" }}>
                            <HTMLContent last={4500} />
                            <span
                              style={{ fontSize: "32px", alignItems: "center" }}
                            >
                              +
                            </span>
                          </div>
                          <p style={{ marginTop: "-30px" }}> Happy Users </p>
                        </div>
                      </div>
                    </div>
                    {/* box 2 */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="usp_box">
                        <div className="usp_icon">
                          <img
                            src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235509/usp2_wqdgie.webp"
                            alt="image"
                          />
                        </div>
                        <div style={{ height: "88px" }}>
                          <br />
                          <div style={{ display: "flex", fontWeight: "600" }}>
                            <HTMLContent last={5000} />
                            <span
                              style={{ fontSize: "32px", alignItems: "center" }}
                            >
                              +
                            </span>
                          </div>
                          <p style={{ marginTop: "-30px" }}>
                            {" "}
                            Positive Reviews{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* box 3 */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="usp_box">
                        <div className="usp_icon">
                          <img
                            src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235508/usp3_rn4sey.webp"
                            alt="image"
                          />
                        </div>
                        <div style={{ height: "88px" }}>
                          <br />
                          <div style={{ display: "flex", fontWeight: "600" }}>
                            <HTMLContent last={1300} />
                            <span
                              style={{ fontSize: "32px", alignItems: "center" }}
                            >
                              +
                            </span>
                          </div>
                          <p style={{ marginTop: "-30px" }}>
                            {" "}
                            Restaurant Listings{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* box 4 */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="usp_box">
                        <div className="usp_icon">
                          <img
                            src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235508/usp4_ekqkfl.webp"
                            alt="image"
                          />
                        </div>
                        <div style={{ height: "88px" }}>
                          <br />
                          <div style={{ display: "flex", fontWeight: "600" }}>
                            <HTMLContent last={3500} />
                            <span
                              style={{ fontSize: "32px", alignItems: "center" }}
                            >
                              +
                            </span>
                          </div>
                          <p style={{ marginTop: "-30px" }}>
                            {" "}
                            Successful Deliveries{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      
    </div>
  )
}

export default Count
