import React from "react";
import ImageSlider from "./ImageSlider";
import Card from "./Card";
import courseCard from "./courseCard";

function createCard(coursep) {
    return (
      <Card img={coursep.img} title={coursep.title} price={coursep.price} offer={coursep.offer} />
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
  return (
    <>
      <div className="relative -top-[45rem] left-[16%] w-[80%]">
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
      <div className="relative -top-[40rem] flex justify-center items-center">
        <div style={titleStyles}>WHY YOU SHOULD JOIN LET’S TRADE INDIA?</div>
      </div>
      <div className="relative -top-[45rem] flex justify-center items-center" >
      <dl className="dictionary">{courseCard.map(createCard)}</dl>
      </div>
    </>
  );
}

export default Home;
