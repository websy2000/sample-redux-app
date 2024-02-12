import { ActionTypes } from "../actionTypes";

const initialState = {
    allProducts: [],
    singleProductData: {}
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.result
            }
        case ActionTypes.GET_SIGNLE_PRODUCT:
            return {
                ...state,
                singleProductData: action.payload
            }

        default:
            return state;
    }
}