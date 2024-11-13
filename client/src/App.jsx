import React from "react";
import { Route, Routes } from "react-router-dom";
import NaveBar from "./components/NaveBar";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <div className="bg-gray-50">
      <NaveBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
