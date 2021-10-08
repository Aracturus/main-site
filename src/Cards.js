import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className={props.class}>
        <img src={props.src.first} alt="video_source" className="card_img" />
        <img src={props.src.second} alt="video_source" className="card_img" />
        <img src={props.src.third} alt="video_source" className="card_img" />tas
      </div>
    </>
  );
};

export default Cards;
