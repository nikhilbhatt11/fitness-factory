import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./mainPage";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/RegisterNow" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
