import React, { useState } from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";
import { ReviewCard } from "../component/ReviewCard";
import { CommentModal } from "../component/CommentModal";

export const RestaurantDetail = () => {
  const { id } = useParams();
  const { state } = useData();
  const [showmodal, setShowModal] = useState(false);

  const findRestaurant = state?.restaurant.find((res) => res.id === Number(id));

  return (
    <div className="restaurant-detail">
      <div className="flex">
        <div>
          <h1 className="restaurant-title">{findRestaurant?.name}</h1>
          <p className="card-sub-detail">
            {findRestaurant?.menu.map(({ name, index }) => (
              <span key={index}>{name}, </span>
            ))}
          </p>
          <p className="card-sub-detail">{findRestaurant?.address}</p>
          <p className="card-sub-detail">
            Average Rating: {findRestaurant?.averageRating}
          </p>
        </div>
        <div>
          <button
            className="review-btn"
            onClick={() => setShowModal((prev) => !prev)}
          >
            Add Review
          </button>
        </div>
      </div>
      <hr className="horizontal-rule" />

      <h2>Reviews</h2>
      <ul>
        {findRestaurant?.ratings.map((review, index) => (
          <li key={index}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>

      {showmodal && <CommentModal setShowModal={setShowModal} id={id} />}
    </div>
  );
};
