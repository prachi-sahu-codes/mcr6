import { createContext, useContext, useReducer } from "react";
import { cuisineData, restaurantsData } from "../backend/data";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "CUISINE_SELECT":
        const newList = state.restaurant.filter(
          (res) => Number(res.cuisine_id) === Number(action.payload)
        );

        return {
          ...state,
          cuisineSelected: action.payload,
          restaurantsList: newList,
        };

      case "ADD_COMMENT":
        const newUpdatedList = state.restaurant.map((res) => {
          if (res.id === Number(action.payload.restaurauntId)) {
            const average =
              res.ratings.reduce((acc, rat) => rat.rating + acc, 0) +
              Number(action?.payload?.data?.rating);
            const finalAverage = average / (res.ratings.length + 1);
            console.log(average, finalAverage);
            return {
              ...res,
              averageRating: finalAverage,
              ratings: [
                ...res.ratings,
                {
                  rating: Number(action?.payload?.data?.rating),
                  comment: action?.payload?.data?.comment,
                  revName: "Rahul",
                  pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
                },
              ],
            };
          } else {
            return res;
          }
        });

        return { ...state, restaurant: newUpdatedList };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFunction, {
    restaurant: [...restaurantsData],
    cuisine: [...cuisineData],
    cuisineSelected: null,
    restaurantsList: [],
  });
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
