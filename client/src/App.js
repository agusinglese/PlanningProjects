import React from "react";
import NavBar from "./components/NavBar";
import Panel from "./components/projects/Panel";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="projects" element={<Panel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
