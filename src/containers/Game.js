import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { GameForm } from "../components/GameForm";
import { QuizCard } from "../components/QuizCard";
import { useGameContextValues } from "../hooks";

export const Game = () => {
  const {
    state: { gameInProgress },
    state,
  } = useGameContextValues();

  console.log(state);

  return (
    <Container maxWidth="md">
      {!gameInProgress && (
        <Box component="section" sx={{ border: "1px solid black" }}>
          <GameForm />
        </Box>
      )}

      {gameInProgress && (
        <Box component="section">
          <QuizCard />
        </Box>
      )}
    </Container>
  );
};
