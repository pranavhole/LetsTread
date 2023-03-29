import React from "react";

function Card(props) {
  return (
    <div className="term">
      <div className="top">
        <img className="square-img" src={props.img} alt="avatar_img" />
        <div className="title">{props.title}</div>
      </div>
      <div className="middle">
        <p className="price">{props.price}</p>
        <p className="offer">{props.offer}</p>
        <a href="/" className="seeMore">See More +</a>
      </div>
      <div className="bottom">
      <a href="/">Subscribe Now</a>
      </div>
    </div>
  );
}

export default Card;
