import React from "react";

import Panel from "./components/projects/Panel";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

import ProjectPanel from "./components/project/ProjectPanel";
import PanelTypes from "./components/types/PanelTypes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Panel />} />
          <Route path="projects/:idProject" element={<ProjectPanel />} />
          <Route path="types" element={<PanelTypes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
