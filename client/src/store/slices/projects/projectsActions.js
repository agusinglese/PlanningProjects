import axios from "axios";
import { urlBase } from "../../../index.js";
import { setProjects, setOneProject } from "./projectsSlices";

export const getProjects = () => (dispatch) => {
  axios
    .get(`${urlBase}/projects`)
    .then((response) => {
      dispatch(setProjects(response.data.data));
    })
    .catch((e) => console.log(e));
};

export const getOneProject = (idProject) => (dispatch) => {
  console.log("actions", idProject);
  axios
    .get(`${urlBase}/projects/${idProject}`)
    .then((response) => {
      dispatch(setOneProject(response.data));
    })
    .catch((e) => console.log(e));
};
