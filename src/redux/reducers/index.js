import { combineReducers } from "redux";
import { singleUSerProfileReducer } from '../reducers/profileReducer';
import { productReducer } from "../reducers/productReducer";

const reducers = combineReducers({
    profileData: singleUSerProfileReducer,
    productsList: productReducer
});


export default reducers;
