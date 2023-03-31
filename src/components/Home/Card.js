import React from "react";
import { Link } from 'react-router-dom'

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
        <Link to={props.courseUrl} className="seeMore">See More +</Link>
      </div>
      <div className="bottom">
      <a href="/">Subscribe Now</a>
      </div>
    </div>
  );
}

export default Card;
