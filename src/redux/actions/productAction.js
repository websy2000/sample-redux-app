import { ActionTypes } from "../actionTypes";
import { getAllProducts, getSingleProductById } from "../../services/service";


export const getAllProductsList = () => {
    return async (dispatch) => {
        const resp = await getAllProducts();
        dispatch({ type: ActionTypes.GET_ALL_PRODUCTS, result: resp });
    }
}

export const getSingleProduct = (id) => {
    return async (dispatch) => {
        const response = await getSingleProductById(id);
        dispatch({ type: ActionTypes.GET_SIGNLE_PRODUCT, payload: response });
    }
}