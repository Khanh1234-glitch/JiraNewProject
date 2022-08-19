import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import LayoutLogin from "./Pages/Auth/LayoutLogin";
import CyberBugTemplate from "./Template/CyberBugTemplate";
import ProjectSetting from "./Pages/CyberBugTemplate/ProjectSetting";
import IndexCyberBugs from "./Component/CyberBugsTemplate/IndexCyberBugs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CyberBugTemplate />}>
          <Route index element={<IndexCyberBugs/>}/>
          <Route path="/projectsetting" element={<ProjectSetting />} />
        </Route>
        <Route path="/login" element={<LayoutLogin />} />
      </Routes>
    </>
  );
}

export default App;
