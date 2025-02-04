import React, { useEffect, useState } from "react";

import "./Css/style.css";
import "./Css/responsive.css";
import "./Css/icofont.min.css";

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
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
import Client from "./Client";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import Download from "./Download";
import Count from "./Count";
import Support from "./Support";

function Home() {
  return (
    <div>
      <>
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

        <Header />

        <>
          {/* Banner Section Start */}

          <Banner />

          {/* Banner-Section-end */}

          {/* Page Wraper */}

          <div className="page_wrapper" style={{ overflow: "hidden" }}>
            {/* usp start */}

            <Count />

            {/* Features-Section-Start */}

            <AOS_Component />

            {/* Features-Section-end */}
            {/* Dishes-Section-Start */}
            <section className="row_am dishes_section">
              {/* container start */}

              {/* container end */}
              {/* dishes list slide  */}

              <CarouselComponent />
            </section>
            {/* Dishes-Section-end */}

            {/* Our Client section */}

            <Client />
          </div>

          <>
            {/* Benefits */}

            <Benefits />

            {/* win win Section End */}

            {/* How it Works Section Start */}

            <HowItWorks />

            {/* How it Works Section End */}

            {/* success stories Section Start */}

            {/* success stories Section End */}

            {/* App-Download-Section-Start */}

            <Download />

            {/* App-Download-Section-end */}

            {/* Blog Section Start */}
            {/* Blog Section End */}

            {/* call to action */}

            <Support />

            <Footer />
          </>
        </>
      </>
    </div>
  );
}

export default Home;
