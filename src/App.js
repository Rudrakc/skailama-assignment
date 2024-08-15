import "./App.css";
import React, { useState } from "react";
import Login from "./auth/Login"
import { Routes, Route } from 'react-router-dom';
import ProjectPage from "./project/ProjectPage";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProjectPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
