import React from "react";
import ImageSlider from "./ImageSlider";
import Card from "./Card";
import courseCard from "./courseCard";
import Middle from "./middle";
import Steps from "./steps";

function createCard(coursep) {
  return (
    <Card
      img={coursep.img}
      title={coursep.title}
      price={coursep.price}
      offer={coursep.offer}
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
    width: "950px",
    height: "450px",
    margin: "0 auto",
  };
  const titleStyles = {
    height: "65px",
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
      <div className="relative -top-[45rem] left-[16%] w-[80%]">
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>

      <div className="relative -top-[40rem] flex justify-center items-center">
        <div style={titleStyles}>We offer following Stock Trading Courses</div>
      </div>

      <div className="relative -top-[45rem] flex justify-center items-center">
        <dl className="dictionary">{courseCard.map(createCard)}</dl>
      </div>

      <div className="relative -top-[45rem] flex justify-center items-center">
        <div style={titleStyles}>WHY YOU SHOULD JOIN LET’S TRADE INDIA?</div>
      </div>

      <div className="relative -top-[55rem] left-[16%] w-[80%]">
        <Middle />
      </div>

      <div className="relative -top-[60rem] flex justify-center items-center">
        <div style={titleStyles}>HOW DOES IT WORKS?</div>
      </div>
      <div className="relative -top-[60rem] flex justify-center items-center">
        <div style={paraStyle}>
          Here are simple steps to start your journey with LTI
        </div>
      </div>
      <div className="relative -top-[60rem] left-[16%] w-[80%]">
        <Steps />
      </div>
    </>
  );
}

export default Home;
