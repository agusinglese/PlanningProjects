import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    projectDetail: {},
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setOneProject: (state, action) => {
      state.projectDetail = action.payload;
    },
  },
});

export const { setProjects, setOneProject } = projectsSlice.actions;
export default projectsSlice.reducer;
