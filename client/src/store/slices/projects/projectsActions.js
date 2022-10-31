import axios from "axios";
import { urlBase } from "../../../index.js";
import { setMsgConfirm, setMsgError } from "../messages/messagesSlices.js";
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
export const filterProjects = (nameType) => (dispatch) => {
  axios
    .get(`${urlBase}/projects/filter/${nameType}`)
    .then((response) => dispatch(setFilterProjects(response.data)))
    .catch((e) => {
      console.log(e);
    });
};

export const putProject = (form) => (dispatch) => {
  axios
    .put(`${urlBase}/projects/${form.id}`)
    .then((response) =>
      response.status === 200
        ? Promise.resolve({
            status: 200,
            msg: "El projecto ha sido modificado con exito",
          })
        : Promise.reject({
            status: response.status,
            msg: "No se ha podido modificar el proyecto",
          })
    )
    .then((res) => dispatch(setMsgConfirm(res)))
    .catch((e) => dispatch(setMsgError(e)));
};

export const deleteProject = (idProject) => (dispatch) => {
  axios
    .delete(`${urlBase}/projects/${idProject}`)
    .then((response) =>
      response.status === 200
        ? Promise.resolve({
            status: 200,
            msg: "El projecto ha sido eliminado con exito",
          })
        : Promise.reject({
            status: response.status,
            msg: "No se ha podido eliminar el proyecto",
          })
    )
    .then((res) => dispatch(setMsgConfirm(res)))
    .catch((e) => dispatch(setMsgError(e)));
};
