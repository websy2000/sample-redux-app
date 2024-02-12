import { ActionTypes } from "../actionTypes";

const initialState = {
  userInfo:{}
}

 export const singleUSerProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.GET_PROFILE_INFO:
            return {
                ...state,
                userInfo:action.payload
            }
            default:
                return state;
            
    }

}

