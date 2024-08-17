import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import ProjectPage from "./pages/project/ProjectPage";
import Home from "./pages/home/Home";
import AddYourPodcasts from "./pages/project/AddYourPocasts/AddYourPodcasts";
import ComingSoon from "./components/ComingSoon";
import AccountSetting from "./pages/project/AccountSettings/AccountSetting";
import Transcript from "./pages/project/AddYourPocasts/Transcript";
import useStore from "./hooks/useStrore";

function App() {
  const { user,setUser } = useStore();

  const storedUser = localStorage.getItem("user");
  if (storedUser && !user) {
    setUser(JSON.parse(storedUser));
  }

  return (
    <div className="App">
      <Routes>
        <>
          <Route
            path="/"
            element={(user && <Home />) || <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={(!user && <Login />) || <Navigate to="/" />}
          />
          <Route path="/project/:projectId" element={<ProjectPage />}>
            <Route index element={<AddYourPodcasts />} />
            <Route path="file/:fileId" element={<Transcript />} />
            <Route path="accountSetting" element={<AccountSetting />} />
            <Route path="comingSoon" element={<ComingSoon />} />
            <Route path="*" element={<Navigate to="/project/:projectId" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </>
      </Routes>
    </div>
  );
}

export default App;
