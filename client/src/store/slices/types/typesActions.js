import axios from "axios";
import { urlBase } from "../../../index.js";
import { setMsgConfirm, setMsgError } from "../messages/messagesSlices.js";
import { setOneType, setTypes } from "./typesSlices.js";

export const getTypes = () => (dispatch) => {
  axios
    .get(`${urlBase}/types`)
    .then((response) => {
      dispatch(setTypes(response.data.data));
    })
    .catch((e) => console.log(e));
};

/*export const getOneType = (idType) => (dispatch) => {
  axios
    .get(`${urlBase}/projects/${idType}`)
    .then((response) => {
      dispatch(setOneType(response.data));
    })
    .catch((e) => console.log(e));
};*/

export const createType = (form) => (dispatch) => {
  axios
    .post(`${urlBase}/types`, form)
    .then((res) =>
      dispatch(
        setMsgConfirm({
          status: res.status,
          msg: `El tipo "${form.name}" fue creado con exito`,
        })
      )
    )
    .catch((e) =>
      dispatch(setMsgError({ msg: `El tipo "${form.name}" ya existe` }))
    );
};

export const deleteType = (idType) => (dispatch) => {
  axios
    .delete(`${urlBase}/types/${idType}`)
    .then((response) =>
      response.status === 200
        ? Promise.resolve({
            status: 200,
            msg: "El registro ha sido eliminado con exito",
          })
        : Promise.reject({
            status: response.status,
            msg: "No se ha podido eliminar el registro",
          })
    )
    .then((res) => dispatch(setMsgConfirm(res)))
    .catch((e) => dispatch(setMsgError(e)));
};
