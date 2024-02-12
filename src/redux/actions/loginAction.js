import { ActionTypes } from "../actionTypes";
import {getSingleUSerById} from "../../services/service";


export const getUserProfileData =  (id) => async(dispatch) => {
    const resp = await getSingleUSerById(id);
    dispatch({type: ActionTypes.GET_PROFILE_INFO, payload:resp});
}
