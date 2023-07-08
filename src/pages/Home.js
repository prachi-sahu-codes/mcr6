import React from "react";
import { useData } from "../context/DataContext";
import { Card } from "../component/Card";

export const Home = () => {
  const { state, dispatch } = useData();

  return (
    <div>
      <h1>Food Ordering App</h1>
      <h2>Select Your Cuisine:</h2>

      {state.cuisine.map((type) => (
        <button
          key={type?.id}
          value={type?.id}
          onClick={(e) =>
            dispatch({ type: "CUISINE_SELECT", payload: type?.id })
          }
        >
          {type?.name}
        </button>
      ))}

      {state.restaurantsList.length > 0 && (
        <ul>
          {state.restaurantsList.map((res) => (
            <li key={res?.id}>
              <h2 className="list-title">Dishes by {res?.name}</h2>
              <ul className="dish-list">
                {res?.menu.map((dish, index) => (
                  <li key={index}>
                    <Card dish={dish} restaurant={res} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
