import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import ProjectPage from "./project/ProjectPage";
import Home from "./home/Home";
import AddYourPodcasts from "./project/AddYourPocasts/AddYourPodcasts";
import ComingSoon from "./project/ComingSoon";
import AccountSetting from "./project/AccountSettings/AccountSetting";
import Transcript from "./project/AddYourPocasts/Transcript";
import useStore from "./hooks/useStrore";

function App() {
  const { user } = useStore();

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
          <Route path="/projects/:projectId" element={<ProjectPage />}>
            <Route index element={<AddYourPodcasts />} />
            <Route path="file/:fileId" element={<Transcript />} />
            <Route path="accountSetting" element={<AccountSetting />} />
            <Route path="comingSoon" element={<ComingSoon />} />
            <Route path="*" element={<Navigate to="/projects/:projectId" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </>
      </Routes>
    </div>
  );
}

export default App;
