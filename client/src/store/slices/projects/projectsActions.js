import axios from "axios";
import { urlBase } from "../../../index.js";
import { setProjects } from "./projectsSlices";

export const getProjects = () => (dispatch) => {
  axios
    .get(`${urlBase}/projects`)
    .then((response) => {
      dispatch(setProjects(response.data.data));
    })
    .catch((e) => console.log(e));
};
