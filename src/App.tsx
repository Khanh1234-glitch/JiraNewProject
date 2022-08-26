import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import LayoutLogin from "./Pages/Auth/LayoutLogin";
import CyberBugTemplate from "./Template/CyberBugTemplate";
import ProjectSetting from "./Pages/CyberBugTemplate/ProjectSetting";
import IndexCyberBugs from "./Component/CyberBugsTemplate/IndexCyberBugs";
import ProjectManament from "./Pages/CyberBugTemplate/ProjectManament";
import ModalCyberbugs from "./HOC/Cyberbugs/ModalCyberbugs";
import EditModal from "./HOC/Modal/EditModal";

function App() {
  return (
    <>
    {/* <ModalCyberbugs/> */}
      <Routes>
        <Route path="/" element={<CyberBugTemplate />}>
          <Route index element={<IndexCyberBugs/>}/>
          <Route path="/projectsetting" element={<ProjectSetting />} />
          <Route path="/projectmanament" element={<ProjectManament/>}/>
        </Route>
          <Route path="/projectmanament/edit/:id" element={<EditModal/>}/>
        <Route path="/login" element={<LayoutLogin />} />
      </Routes>
    </>
  );
}

export default App;
