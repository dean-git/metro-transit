import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Direction from "./pages/Direction";
import Stops from "./pages/Stops";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route path="/direction" element={<Direction />}>
          <Route path="/direction/stops" element={<Stops />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
