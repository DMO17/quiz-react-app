import { useContext } from "react";
import { GameProvider } from "../contexts/GameProvider";

export const globalGameContextValues = () => {
  return useContext(GameProvider);
};
