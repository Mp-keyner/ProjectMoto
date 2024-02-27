import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Button } from "@mui/material";

const App = () => {
  const {
    people: { name },
  } = useContext(AppContext);
  console.log(name);
  // #ed1744
  return (
    <div>
      {name}
      <Button variant="text" color="primary">
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default App;
