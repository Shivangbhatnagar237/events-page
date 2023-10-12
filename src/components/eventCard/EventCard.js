import leftarrow from "../../assets/images/left-arrow.png";
import rightarrow from "../../assets/images/finalarrowright.png";
import "./EventCard.css";

import { useState } from "react";

const EventCard = ({ img, name, desc, rating, price, dimensions, setIndex, index }) => {

  // let i = 0;
  

  const leftBtnClick = () => {
    setIndex(index+1);
  };

  const rightBtnClick = () => {
  };

  return (
    <div className="hotel-view">
      <div className="arrows">
        <div
          className="arrow-1 arrow"
          onClick={leftBtnClick()}
          // onmousemove={mousemove()}
          // onmouseleave={mouseleave()}
        >
          <img src={leftarrow} alt="" />
        </div>
        <div
          className="arrow-2 arrow"
          onClick={rightBtnClick()}
          // onmousemove={mousemove()}
          // onmouseleave={mouseleave()}
        >
          <img src={rightarrow} alt="" />
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-viewer">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="dets">
        <div className="dets-top dets-section">
          <div className="restaurant-ki-list">
            <h1>{name}</h1>
          </div>
          <div className="res-desc">
            <h5>{desc}</h5>
          </div>
        </div>
        <div className="dets-bottom dets-section">
          <div className="details">
            <div className="head-blocks rating">
              <h1>RATING</h1>
              <div className="rating-list vals">
                <h1>{rating}</h1>
              </div>
            </div>
            <div className="head-blocks price">
              <h1>PRICE</h1>
              <div className="price-list vals">
                <h1>
                  {price}
                  <sub>/day</sub>
                </h1>
              </div>
            </div>
            <div className="head-blocks dimension">
              <h1>DIMENSIONS</h1>
              <div className="dimensions-list vals">
                <h1>
                  {dimensions}
                  <sub>sq.ft.</sub>
                </h1>
              </div>
            </div>
          </div>
          <div className="book-now">
            <h3>Book now</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
