import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useData } from "../context/DataContext";
import { toast } from "react-toastify";

const options = [1, 2, 3, 4, 5];

export const CommentModal = ({ setShowModal, id }) => {
  const { dispatch } = useData();
  const [inputData, setInputData] = useState({ rating: null, comment: "" });

  const submitHandler = () => {
    if (inputData.rating && inputData.comment) {
      dispatch({
        type: "ADD_COMMENT",
        payload: { data: inputData, restaurauntId: id },
      });
      toast.success("Rating added!");
      setShowModal(false);
    } else {
      toast.warn("Please fill all fields!");
    }
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <MdOutlineCancel
          className="back-arrow"
          onClick={() => setShowModal(false)}
        />
        <h2>Add Your Review</h2>
        <hr className="modal-line" />
        <div className="flex">
          <p className="input-title">Rating:</p>
          <select
            className="input-select"
            onChange={(e) =>
              setInputData((prev) => ({ ...prev, rating: e.target.value }))
            }
          >
            <option disabled selected>
              Select Rating
            </option>
            {options.map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>
        <div className="flex">
          <label className="input-title">Comment:</label>
          <input
            type="text"
            className="input-comment"
            placeholder="Write your comment"
            onChange={(e) =>
              setInputData((prev) => ({ ...prev, comment: e.target.value }))
            }
          />
        </div>
        <button className="submit-btn" onClick={() => submitHandler()}>
          Submit
        </button>
      </div>
    </div>
  );
};
