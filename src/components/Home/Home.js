import React from "react";
import ImageSlider from "./ImageSlider";
import Card from "./Card";
import courseCard from "./courseCard";
import Middle from "./middle";
import Steps from "./steps";
import Feedback from "./feedback";
import customerFeedback from "./customerFeedback";
import { Fade } from "react-reveal";



function createCard(coursep) {
  return (
    
    <Card
      img={coursep.img}
      title={coursep.title}
      price={coursep.price}
      offer={coursep.offer}
      courseUrl={coursep.courseUrl}
    />
  
  );
}

function custFeedback(custf) {
  return (
    <Feedback
      name={custf.name}
      star={custf.star}
      profile={custf.profile}
      content={custf.content}
    />
  );
}
function Home() {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.png", title: "forest" },
  ];
  const containerStyles = {
    width: "90vw",
    height: "80vh",
    margin: "0 auto",
  };
  const titleStyles = {
    margin:"2rem",
    height: "fit-content",
    left: "453px",
    top: "2710px",
    borderRadius: "nullpx",
    fontFamily: "Mulish",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "65px",
    letterSpacing: "0em",
    color: "rgba(45, 85, 47, 1)",
  };
  const paraStyle = {
    color: "#3A3A3A",
    fontWeight: "700",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontSize: "20px",
    lineHeight: "31px",
  };
  return (
    <>
      <div className=" flex-wrap  w-full justify-evenly screen">
        <div className=" flex flex-col justify-center space-y-4">
          <div className="py-8">
            <div style={containerStyles}>
              <ImageSlider slides={slides} />
            </div>
          </div>
          <Fade duration={3000} left>
          <div className=" flex flex-col justify-center items-center text-center">
            <div style={titleStyles}>We offer following Stock Trading Courses</div>
            <dl className="justify-center dictionary flex ">{courseCard.map(createCard)}</dl>
          </div>
          </Fade>
          <Fade duration={3000} right>
          <div className=" text-center justify-center">
            <div style={titleStyles}>WHY YOU SHOULD JOIN LET'S TRADE INDIA?</div>
            <Middle />
          </div>
          </Fade>
          
          <div className="flex flex-col  justify-center items-center text-center">
            <div style={titleStyles}>HOW DOES IT WORKS?</div>
            <div style={paraStyle}>
              Here are simple steps to start your journey with LTI
            </div>
            <Steps />
          </div>
          
          
          <div className="flex flex-col justify-center items-center text-center">
          <Fade duration={3000} right>
            <div style={titleStyles} className=" justify-center">Customer Feedback & Reviews</div>
            <dl className=" w-full justify-center">{customerFeedback.map(custFeedback)}</dl>
            </Fade>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Home;
