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
    setOrderName: (state, action) => {
      let allProjects = state.projects;
      if (action.payload === "asc") {
        allProjects.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "desc") {
        allProjects.reverse((a, b) => a.name.localeCompare(b.name));
      }
      state.projects = allProjects;
    },
    setFilterProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects, setOneProject, setOrderName, setFilterProjects } =
  projectsSlice.actions;
export default projectsSlice.reducer;
