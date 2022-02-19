import React, { useReducer } from "react";

export const GameContext = React.createContext();

const initialState = {
  gameInProgress: false,
  category: "sports",
};

const ACTIONS = {
  CHANGE_CATEGORIES: "change_category",
  START_GAME: "start_game",
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.CHANGE_CATEGORIES) {
    return { ...state, category: action.payload };
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const globalContextValues = { state, reducer, ACTIONS };

  return (
    <>
      <GameContext.Provider value={globalContextValues}>
        {children}
      </GameContext.Provider>
    </>
  );
};
