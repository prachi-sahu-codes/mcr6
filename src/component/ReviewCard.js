import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";

export const ReviewCard = ({ review }) => {
  const navigate = useNavigate();
  return (
    <div className="review-card">
      <BiArrowBack onClick={() => navigate(-1)} className="back-arrow" />
      <div className="flex">
        <div className="review-person">
          <img src={review?.pp} alt="person pic" className="review-img" />{" "}
          <h4>{review?.revName}</h4>
        </div>
        <div className="rating">
          <span className="rating-num">{review?.rating}</span> <AiOutlineStar />
        </div>
      </div>
      <p className="review-comment">{review?.comment}</p>
      <hr />
    </div>
  );
};
