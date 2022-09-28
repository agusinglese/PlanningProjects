import { configureStore } from "@reduxjs/toolkit";
import projects from "./slices/projects/projectsSlices.js";
import types from "./slices/types/typesSlices.js";
import messages from "./slices/messages/messagesSlices.js";
export const store = configureStore({
  reducer: {
    projects,
    types,
    messages,
  },
});
