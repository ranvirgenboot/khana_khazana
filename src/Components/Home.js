import React, { useEffect, useState } from "react";

import "./Css/style.css";
import "./Css/responsive.css";
import "./Css/icofont.min.css";
import "./Css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./Css/owl.carousel.min.css";
import "./Css/css2";
import "./Css/css2(1)";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithStyles from "react-multi-carousel";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import CarouselComponent from "./CarouselComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import AOS_Component from "./AOS_Component";

function Home() {
  const text = {
    fontSize: "40px",
    alignItems: "center",
    color: "white",
  };

  function HTMLContent({ last }) {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));

    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    useEffect(() => {
      if (scrollPos > 200) {
        const controls = animate(count, last, { duration: 1 });
        return () => controls.stop();
      }
    }, [scrollPos, last]);

    return <motion.pre style={text}>{rounded}</motion.pre>;
  }

  return (
    <div>
      <>
        {/* saved from url=(0125)https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/02-food-delivery-static-centre-hero/index.html */}
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Meta Description */}
        <meta
          name="description"
          content="Order your favorite meals with ease using our Food Delivery mobile app. Browse local restaurants, customize your order, and enjoy fast, reliable delivery straight to your door. Download now for convenient, delicious dining at your fingertips."
        />

        {/* icofont-css-link */}
        <link rel="stylesheet" href="./Css/icofont.min.css" />
        {/* Owl-Carosal-Style-link */}
        <link rel="stylesheet" href="./Css/owl.carousel.min.css" />
        {/* Bootstrap-Style-link */}
        <link rel="stylesheet" href="./Css/bootstrap.min.css" />
        {/* Aos-Style-link */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        {/* Coustome-Style-link */}
        <link rel="stylesheet" href="./Css/style.css" />
        {/* Responsive-Style-link */}
        <link rel="stylesheet" href="./Css/responsive.css" />
        {/* Favicon */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737350167/Image_3_1__processed_i47q0s.png"
          type="image/x-icon"
        />
        {/* font 1 */}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="./Food Delivery Mobile App Landing Page HTML Template_files/css2"
          rel="stylesheet"
        />
        {/* font 2 */}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link href="./Css/css2(1)" rel="stylesheet" />
        {/* Preloader */}
        <div id="preloader" style={{ display: "none" }}>
          <div id="loader" />
        </div>
        {/* Header Start */}
        <header>
          {/* container start */}
          <div className="container">
            {/* navigation bar */}
            <nav
              className="navbar navbar-expand-lg"
              style={{ marginLeft: "-130px" }}
            >
              <a className="navbar-brand" href="">
                <img
                  src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737615363/Image_5_1__processed_3_kxlo2n.png"
                  alt="Logo"
                  style={{ width: 200 }}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  {/* <i class="icofont-navigation-menu ico_menu"></i> */}
                  <span className="toggle-wrap">
                    <span className="toggle-bar" />
                  </span>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ marginRight: "-140px" }}
              >
                <ul className="navbar-nav ml-auto">
                  {/* secondery menu start */}
                  <li className="nav-item has_dropdown">
                    <a className="nav-link" href="">
                      <button
                        style={{
                          backgroundColor: "#979a97",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          fontSize: 16,
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          borderRadius: 5,
                          width: 100,
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#fb5b29")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#979a97")
                        }
                      >
                        Home
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://khanakhazana.genaiapp.io/page/vendor-registration"
                      target="_blank"
                    >
                      <button
                        style={{
                          backgroundColor: "#979a97",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          fontSize: 16,
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          borderRadius: 5,
                          width: 100,
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#fb5b29")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#979a97")
                        }
                      >
                        Merchants
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://khanakhazana.genaiapp.io/page/driver-registration"
                      target="_blank"
                    >
                      <button
                        style={{
                          backgroundColor: "#979a97",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          fontSize: 16,
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          borderRadius: 5,
                          width: 100,
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#fb5b29")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#979a97")
                        }
                      >
                        Riders
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      <button
                        style={{
                          backgroundColor: "#979a97",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          fontSize: 16,
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          borderRadius: 5,
                          width: 100,
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#fb5b29")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#979a97")
                        }
                      >
                        About Us
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* navigation end */}
          </div>
          {/* container end */}
        </header>

        <>
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
                      Order authentic Indian cuisine– authentic flavors from
                      every corner of India, delivered to your doorstep in just
                      a tap
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
          {/* Banner-Section-end */}
          {/* Page Wraper */}
          <div className="page_wrapper" style={{ overflow: "hidden" }}>
            {/* usp start */}
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
            {/* Features-Section-Start */}

            <AOS_Component />

            {/* Features-Section-end */}
            {/* Dishes-Section-Start */}
            <section className="row_am dishes_section">
              {/* container start */}
              <div className="container">
                {/* section title */}
                <div
                  className="section_title aos-init"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-delay={100}
                >
                  {/* h2 */}
                  <h2 style={{ fontWeight: "bold", fontSize: "3rem" }}>
                    Access over 1000+ dishes with just a tap
                  </h2>
                  <p style={{ fontWeight: "semi-bold", fontSize: "1.4rem" }}>
                    Whatever your heart says, “Desi Swaad at Home Comfort,”
                    we’ve got you covered
                  </p>
                  {/* p */}
                </div>
              </div>
              {/* container end */}
              {/* dishes list slide  */}

              <CarouselComponent />
            </section>
            {/* Dishes-Section-end */}

            {/* Our Client section */}

            <section class="row_am our_client">
              <div class="container">
                <div
                  class="section_title aos-init"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <span class="title_badge">Our clients</span>
                  <h2 style={{ fontWeight: "bold", fontSize: "3rem" }}>
                    Trusted by 2.5k+ restaurant{" "}
                  </h2>
                </div>

                <ul class="client_list">
                  <li>
                    <div
                      class="client_logo aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235504/res1_vjee7i.webp"
                        alt="image"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      class="client_logo aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res2_s2mnot.webp"
                        alt="image"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      class="client_logo aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res3_eh903x.webp"
                        alt="image"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      class="client_logo aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res4_ewgciq.webp"
                        alt="image"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      class="client_logo aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res5_ekkbif.webp"
                        alt="image"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      class="client_logo aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res6_dl4th1.webp"
                        alt="image"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      class="client_logo aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res8_ym9elt.webp"
                        alt="image"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      class="client_logo aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <img
                        src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res7_bw89in.webp"
                        alt="image"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <>
            <section className="winwin_section row_am" id="benefits_sec">
              <div className="container">
                {/* section title */}
                <div className="section_title">
                  <span className="title_badge">benefits</span>
                  <h2 style={{ fontWeight: "bold", fontSize: "3rem" }}>
                    Delivering success for restaurants &amp; Foodies
                  </h2>
                  <p>
                    Connecting restaurants with hungry customers, fostering
                    growth, convenience, and mouth-watering experiences that
                    satisfy cravings and bring people together!
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
                            <h4 style={{ fontWeight: "bold" }}>
                              Merchant Benefits
                            </h4>
                            <div>
                              <p>
                                {" "}
                                Simplify tasks, automate workflows, and gain
                                insights to optimize performance, reduce costs,
                                and boost customer satisfaction effortlessly!
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
                            <h4 style={{ fontWeight: "bold" }}>
                              Customer Benefits
                            </h4>
                            <p>
                              Place orders in no time, customize to your taste,
                              and track in real-time. Our mobile app makes food
                              ordering fast, easy, and delightfully convenient!
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
            {/* win win Section End */}
            {/* How it Works Section Start */}
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
                      Order your favorite food in minutes! Enjoy a seamless
                      experience with our intuitive solution: browse, select,
                      order, track, and receive your food with ease and speed!
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
                                Get started with our food delivery app!
                                Download, create a free account, and start
                                ordering instantly!
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
                                Choose your favorite dish from the restaurant
                                you love and place your order with just a few
                                clicks!
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
                                Get it delivered directly to your home,
                                effortlessly{" "}
                              </h5>
                              <p>
                                {" "}
                                Relax and enjoy! Your favorite food is delivered
                                right to your doorstep, hassle-free and
                                convenient!
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
            {/* How it Works Section End */}
            {/* success stories Section Start */}
            {/* success stories Section End */}
            {/* App-Download-Section-Start */}
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
                          experience, lightning-fast delivery, and incredible
                          offers tailored just for you!
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
            {/* App-Download-Section-end */}
            {/* Blog Section Start */}
            {/* Blog Section End */}
            {/* call to action */}
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
                      <div className="links" style={{textAlign: "start"}}>
                        <h5>Quick Links</h5>
                        <ul style={{marginLeft: "-20px"}} >
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
                            <a href="mailto:Khanakhazana@gmail.com">
                              Contact us
                            </a>
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
                              (e.currentTarget.children[0].style.filter =
                                "invert(1)")
                            }
                            onMouseOut={(e) =>
                              (e.currentTarget.children[0].style.filter =
                                "invert(0)")
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
                              (e.currentTarget.children[0].style.filter =
                                "invert(1)")
                            }
                            onMouseOut={(e) =>
                              (e.currentTarget.children[0].style.filter =
                                "invert(0)")
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
                              (e.currentTarget.children[0].style.filter =
                                "invert(1)")
                            }
                            onMouseOut={(e) =>
                              (e.currentTarget.children[0].style.filter =
                                "invert(0)")
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
          </>
        </>
      </>
    </div>
  );
}

export default Home;
