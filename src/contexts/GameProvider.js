import { useReducer, createContext } from "react";
import { questions } from "../data/questions";

export const GameContext = createContext();

const initialState = {
  gameInProgress: false,
  category: "sports",
  question: questions.sports,
};

const ACTIONS = {
  CHANGE_CATEGORIES: "change_category",
  START_GAME: "start_game",
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.CHANGE_CATEGORIES) {
    return { ...state, category: action.payload };
  }
  if (action.type === ACTIONS.START_GAME) {
    return {
      ...state,
      gameInProgress: true,
      question: questions[state.category],
    };
  }
  return state;
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const globalContextValues = { state, dispatch, ACTIONS };

  return (
    <GameContext.Provider value={globalContextValues}>
      {children}
    </GameContext.Provider>
  );
};
