import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Locations from "./pages/Locations";

function App(): JSX.Element {
  return (
    <div className="font-libre-baskerville">
      <BrowserRouter>
        <Routes>
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
