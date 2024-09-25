import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import HomePage from "./components/HomePage"; // Make sure this import is correct
import PsychologistsPage from "./components/PsychologistsPage"; // Psychologists Page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="flex flex-col md:flex-row">
              <LeftSide />
              <RightSide />
            </div>
          } 
        />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/psychologists" element={<PsychologistsPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
