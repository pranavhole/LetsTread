import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/about" className="seeMore">See More +</Link>
      </div>
      <div className="bottom">
      <Link to="/">Subscribe Now</Link>
      </div>
    </div>
  );
}

export default Card;
