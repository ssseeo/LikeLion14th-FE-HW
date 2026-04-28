import React from "react";
import { Map } from "./Map";

const Main = ({ places, setSelectedPlace }) => {
  return (
    <Map
      places={places}
      setSelectedPlace={setSelectedPlace}
    />
  );
};

export default Main;