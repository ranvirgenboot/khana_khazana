import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = ({ deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const imageArray = [
   "https://res.cloudinary.com/dx9kqohjf/image/upload/v1737463259/p1-1_i8y3rm.png" , "https://res.cloudinary.com/dx9kqohjf/image/upload/v1737463259/p3_qgvuqv.png" , "https://res.cloudinary.com/dx9kqohjf/image/upload/v1737463259/p2_qrkmul.png" ,    "https://res.cloudinary.com/dx9kqohjf/image/upload/v1737463260/p4_gbnoib.png" , "https://res.cloudinary.com/dx9kqohjf/image/upload/v1737463260/food1-1_hs9fhs.png" , "https://res.cloudinary.com/dx9kqohjf/image/upload/v1737463260/p5_gng2bv.png" , "https://res.cloudinary.com/dx9kqohjf/image/upload/v1737463260/p6_dlmzkr.png" , 
    "https://res.cloudinary.com/dx9kqohjf/image/upload/v1737529425/new1_processed_svljqr.png" , "https://res.cloudinary.com/dx9kqohjf/image/upload/v1737615965/th_6__processed_2_l83aeh.png" , "https://res.cloudinary.com/dx9kqohjf/image/upload/v1737635236/5_processed_ogfdqp.png" , 


    


   ];

  const ImageBox = ({ src, index }) => {
    return (
      <>
        <div>
          <img src={src} alt={index} style={{width: "150px" , height: "150px"}}/>
        </div>
      </>
    );
  };

  return (
    <>
      <Carousel
    
        responsive={responsive}
       
        
        autoPlay
        autoPlaySpeed={1000}
      
     
       
      
        arrows={false}
     
        infinite
        
        
      
       
      
     
       
      >
        {imageArray.map((el, i) => (
          <ImageBox key={i} src={el} index={i} />
        ))}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
