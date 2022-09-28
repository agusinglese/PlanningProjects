import axios from "axios";
import { urlBase } from "../../../index.js";
import {
  setProjects,
  setOneProject,
  setOrderName,
  setFilterProjects,
} from "./projectsSlices";

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

export const getOrderName = (orderType) => {
  setOrderName(orderType);
};

export const createProject = (form) => (dispatch) => {
  axios
    .post(`${urlBase}/projects`, form)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};
export const filterProjects = (idType) => (dispatch) => {
  axios
    .get(`${urlBase}/projects?type=${idType}`)
    .then((response) => dispatch(setFilterProjects(response.data.data)))
    .catch((e) => {
      console.log(e);
    });
};
