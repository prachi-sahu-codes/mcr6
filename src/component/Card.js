import React from "react";
import { useNavigate } from "react-router";

export const Card = ({ dish, restaurant }) => {
  const navigate = useNavigate();
  return (
    <div
      className="dish-card"
      onClick={() => navigate(`/restaurant/${restaurant?.id}`)}
    >
      <img src={dish?.imgSrc} alt="dish pic" className="dish-card-img" />
      <div className="card-detail">
        <h4>{dish?.name}</h4>
        <p className="card-price card-sub-detail">
          Rs.{dish?.price} for {dish?.qty}
        </p>
        <p className="card-sub-detail">{restaurant?.name}</p>
      </div>
    </div>
  );
};
