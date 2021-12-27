import React from "react";
import NotFound from "./containers/NotFound";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";

export default function Switches() {
  return (
    <Routes>
      <Route exact path="/">
        <Home />
      </Route>
    {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Routes>
  );
}
