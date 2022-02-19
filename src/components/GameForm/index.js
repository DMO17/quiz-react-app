import React from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export const GameForm = () => {
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <form onSubmit={onsubmit}>
      <FormControl sx={{ width: "100%" }} variant="standard">
        <InputLabel id="gameCategoryLabel">Choose a category</InputLabel>
        <Select
          labelId="gameCategoryLabel"
          id="gameCategory"
          //   onChange={}
          value="sports"
        >
          <MenuItem value="music" sx={{ width: "100%" }}>
            Music
          </MenuItem>
          <MenuItem value="movies" sx={{ width: "100%" }}>
            Movies
          </MenuItem>
          <MenuItem value="sports" sx={{ width: "100%" }}>
            Sports
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "100%" }} variant="standard">
        <Button fullWidth variant="contained" type="submit">
          Start Quiz
        </Button>
      </FormControl>
    </form>
  );
};
