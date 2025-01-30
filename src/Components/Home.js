import React , {useEffect} from 'react'
import './Css/aos.css'
import './Css/style.css'
import './Css/responsive.css'
import './Css/icofont.min.css'
import './Css/bootstrap.min.css'
import './Css/owl.carousel.min.css'
import './Css/css2'
import './Css/css2(1)'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WithStyles from 'react-multi-carousel'
import { animate, motion, useMotionValue, useTransform } from "motion/react"
// import { useEffect } from "react"




function Home() {
const HTMLContent =()=> {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 500, { duration: 1 })
        return () => controls.stop()
    }, [])

    return <motion.pre style={text}>{rounded}</motion.pre>
}

/**
 * ==============   Styles   ================
 */

const text = {
    fontSize: "40px",
    alignItems : "center",
    color: "white",
}
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  console.log(responsive);
  


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
  <title>Khana Khazana</title>
  {/* icofont-css-link */}
   <link
    rel="stylesheet"
    href="./Css/icofont.min.css"
  /> 
  {/* Owl-Carosal-Style-link */}
   <link
    rel="stylesheet"
    href="./Css/owl.carousel.min.css"
  />
  {/* Bootstrap-Style-link */}
   <link
    rel="stylesheet"
    href="./Css/bootstrap.min.css"
  /> 
  {/* Aos-Style-link */}
  <link
    rel="stylesheet"
    href="./Css/aos.css"
  />
  {/* Coustome-Style-link */}
  <link
    rel="stylesheet"
    href="./Css/style.css"
  />
  {/* Responsive-Style-link */}
  <link
    rel="stylesheet"
    href="./Css/responsive.css"
  />
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
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    href="./Food Delivery Mobile App Landing Page HTML Template_files/css2"
    rel="stylesheet"
  />
  {/* font 2 */}
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    href="./Css/css2(1)"
    rel="stylesheet"
  />
  {/* Preloader */}
  <div id="preloader" style={{ display: "none" }}>
    <div id="loader" />
  </div>
  {/* Header Start */}
  <header>
    {/* container start */}
    <div className="container">
      {/* navigation bar */}
      <nav className="navbar navbar-expand-lg" style={{ marginLeft: "-130px" }}>
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
                {" "}
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
                    width: 100
                  }}
                  onmouseover="this.style.backgroundColor='#fb5b29'"
                  onmouseout="this.style.backgroundColor='#979a97'"
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
                    width: 100
                  }}
                  onmouseover="this.style.backgroundColor='#fb5b29'"
                  onmouseout="this.style.backgroundColor='#979a97'"
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
                    width: 100
                  }}
                  onmouseover="this.style.backgroundColor='#fb5b29'"
                  onmouseout="this.style.backgroundColor='#979a97'"
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
                    width: 100
                  }}
                  onmouseover="this.style.backgroundColor='#fb5b29'"
                  onmouseout="this.style.backgroundColor='#979a97'"
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
                  width: 150
                }}
                onmouseover="this.style.backgroundColor='#fb5b29'"
                onmouseout="this.style.backgroundColor='black'"
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
                <div className="usp_text">
                  <span className="counter-value" data-count={5000}>
                    5000
                  </span>
                  <span>+</span>
                  <p> Happy Users</p>
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
                <div className="usp_text">
                  <span className="counter-value" data-count={1879}>
                    1879
                  </span>
                  <span>+</span>
                  <p> Positive Reviews </p>
                </div>
              </div>
            </div>
            {/* box 4 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="usp_box">
                <div className="usp_icon">
                  <img
                    src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235508/usp3_rn4sey.webp"
                    alt="image"
                  />
                </div>
                <div style={{height :"88px"}}>
                  <br />
                  <div style={{ display : 'flex', fontWeight:"600"}}>
                  <HTMLContent /><span style={{fontSize : "32px", alignItems : "center"}}>+</span></div>
                  <p style={{marginTop: "-30px"}}> Restaurant Listings </p>
                </div>
              </div>
            </div>
            {/* box 5 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="usp_box">
                <div className="usp_icon">
                  <img
                    src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235508/usp4_ekqkfl.webp"
                    alt="image"
                  />
                </div>
                <div className="usp_text">
                  <span className="counter-value" data-count={985}>
                    985
                  </span>
                  <span>M+</span>
                  <p> Successful deliveries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Features-Section-Start */}
    <section className="row_am features_section" id="why_sec">
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
          <h2>Why Choose Us</h2>
          {/* p */}
          <h5>Bringing The True Flavors Of Authentic Indian Cuisine To You</h5>
          <p style={{ textAlign: "center" }}>
            Khana Khazana brings India’s authentic flavor to Paris and all in
            France. Our advanced food delivery platform delivers authentic
            Indian cuisine right to your doorstep, offering everything from
            curries to biryanis with a fragrant aroma. We’ve got a passionate
            team that aims to achieve culinary excellence and make Indian food
            accessible to all.
          </p>
        </div>
        <div className="feature_detail">
          {/* side element left  */}
          {/* feature box left */}
          <div className="left_data feature_box">
            {/* feature box */}
            <div
              className="data_block color1 aos-init"
              data-aos="fade-right"
              data-aos-duration={1500}
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
                  Unlock special discounts and offers to save on your next meal.
                </p>
              </div>
            </div>
            {/* feature box */}
            <div
              className="data_block color2 aos-init"
              data-aos="fade-right"
              data-aos-duration={1500}
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
                  Choose from multiple secure payment methods for convenience.
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
                  Directly communicate with your delivery partner for updates or
                  special requests.
                </p>
              </div>
            </div>
            <div
              className="data_block color3 aos-init"
              data-aos="fade-left"
              data-aos-duration={1500}
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
            >
              <div className="icon">
                <img
                  src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235507/whyicon4_ffvoxk.webp"
                  alt="image"
                />
              </div>
              <div className="text">
                <h6>Seamless Delivery</h6>
                <p>Enjoy hot and fresh food delivered quickly to your door.</p>
              </div>
            </div>
          </div>
          {/* feature image */}
          <div
            className="feature_img aos-init"
            data-aos="fade-up"
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
          <h2>Access over 1000+ dishes with just a tap</h2>
          <p>
            Whatever your heart says, “Desi Swaad at Home Comfort,” we’ve got
            you covered
          </p>
          {/* p */}
        </div>
      </div>
      {/* container end */}
      {/* dishes list slide  */}
     
      {/* <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  customTransition="all 1s linear"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={responsive}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
  transitionDuration={1000}
>
  <WithStyles
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 1"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 1"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 2"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 1"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
</Carousel> */}







    </section>
    {/* Dishes-Section-end */}
    {/* Our Client section */}
    <section className="row_am our_client">
      <div className="container">
        {/* section title */}
        <div
          className="section_title aos-init"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <span className="title_badge">Our clients</span>
          <h2>Trusted by 2.5k+ restaurant</h2>
        </div>
        {/* Our Client List */}
        <ul className="client_list">
          <li>
            <div
              className="client_logo aos-init"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235504/res1_vjee7i.webp"
                alt="image"
              />
            </div>
          </li>
          <li>
            <div
              className="client_logo aos-init"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res2_s2mnot.webp"
                alt="image"
              />
            </div>
          </li>
          <li>
            <div
              className="client_logo aos-init"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res3_eh903x.webp"
                alt="image"
              />
            </div>
          </li>
          <li>
            <div
              className="client_logo aos-init"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res4_ewgciq.webp"
                alt="image"
              />
            </div>
          </li>
          <li>
            <div
              className="client_logo aos-init"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res5_ekkbif.webp"
                alt="image"
              />
            </div>
          </li>
          <li>
            <div
              className="client_logo aos-init"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res6_dl4th1.webp"
                alt="image"
              />
            </div>
          </li>
          <li>
            <div
              className="client_logo aos-init"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res7_bw89in.webp"
                alt="image"
              />
            </div>
          </li>
          <li>
            <div
              className="client_logo aos-init"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <img
                src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1738235503/res8_ym9elt.webp"
                alt="image"
              />
            </div>
          </li>
        </ul>
        {/* button  */}
      </div>
    </section>
  </div>

  <>
  <section className="winwin_section row_am" id="benefits_sec">
    <div className="container">
      {/* section title */}
      <div className="section_title">
        <span className="title_badge">benefits</span>
        <h2>Delivering success for restaurants &amp; Foodies</h2>
        <p>
          Connecting restaurants with hungry customers, fostering growth,
          convenience, and mouth-watering experiences that satisfy cravings and
          bring people together!
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
                  <h4>Merchant Benefits</h4>
                  <div>
                    <p>
                      {" "}
                      Simplify tasks, automate workflows, and gain insights to
                      optimize performance, reduce costs, and boost customer
                      satisfaction effortlessly!
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
                  <h4>Customer Benefits</h4>
                  <p>
                    Place orders in no time, customize to your taste, and track
                    in real-time. Our mobile app makes food ordering fast, easy,
                    and delightfully convenient!
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
          <h2>How it Works</h2>
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
                    <h5>Download App &amp; create a free account </h5>
                    <p>
                      {" "}
                      Get started with our food delivery app! Download, create a
                      free account, and start ordering instantly!
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
                    <h5> Order your favourite food in no time</h5>
                    <p>
                      Choose your favorite dish from the restaurant you love and
                      place your order with just a few clicks!
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
                    <h5>
                      {" "}
                      Get it delivered directly to your home, effortlessly{" "}
                    </h5>
                    <p>
                      {" "}
                      Relax and enjoy! Your favorite food is delivered right to
                      your doorstep, hassle-free and convenient!
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
              <h2>Download app to enjoy 4500+ foods </h2>
              <p>
                Download our mobile app for a seamless food ordering experience,
                lightning-fast delivery, and incredible offers tailored just for
                you!
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
            <h3 style={{ color: "black" }}>Need support?</h3>
            {/* p */}
          </div>
        </div>
        {/* cta buttons */}
        <div className="right">
          <div className="btn_block ">
            <a
              href="tel:3489390172"
              className="btn puprple_btn aos-init aos-animate call_btn"
            >
              {" "}
              Call us now
            </a>
            <a
              href="mailto:Khanakhazana@gmail.com"
              className="btn aos-init aos-animate email_btn"
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
            <p style={{ marginTop: "-40px" }}>
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
          <div className="links">
            <h5>Quick Links</h5>
            <ul>
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
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                style={{ display: "inline-block", transition: "all 0.3s ease" }}
                onmouseover="this.children[0].style.filter='invert(1)'"
                onmouseout="this.children[0].style.filter='invert(0)'"
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
                style={{ display: "inline-block", transition: "all 0.3s ease" }}
                onmouseover="this.children[0].style.filter='invert(1)'"
                onmouseout="this.children[0].style.filter='invert(0)'"
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
                style={{ display: "inline-block", transition: "all 0.3s ease" }}
                onmouseover="this.children[0].style.filter='invert(1)'"
                onmouseout="this.children[0].style.filter='invert(0)'"
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
              marginLeft: "-60px"
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
              marginLeft: "-60px"
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
    <div className="bottom_footer" style={{ borderTop: "solid white 1px" }}>
      {/* container start */}
      <div className="container">
        {/* row start */}
        <div className="row"></div>
        {/* row end */}
        <div
          className="col-md-4"
          style={{ display: "flex", justifyContent: "right", marginLeft: 350 }}
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
  )
}

export default Home
