import { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";

export const useGameContextValues = () => {
  return useContext(GameContext);
};
