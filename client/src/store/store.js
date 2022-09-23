import { configureStore } from "@reduxjs/toolkit";
import projects from "./slices/projects/projectsSlices.js";

export const store = configureStore({
  reducer: {
    projects,
  },
});
