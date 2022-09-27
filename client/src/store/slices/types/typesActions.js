import axios from "axios";
import { urlBase } from "../../../index.js";
import { setOneType, setTypes } from "./typesSlices.js";

export const getTypes = () => (dispatch) => {
  axios
    .get(`${urlBase}/types`)
    .then((response) => {
      dispatch(setTypes(response.data.data));
    })
    .catch((e) => console.log(e));
};

export const getOneType = (idType) => (dispatch) => {
  axios
    .get(`${urlBase}/projects/${idType}`)
    .then((response) => {
      dispatch(setOneType(response.data));
    })
    .catch((e) => console.log(e));
};
