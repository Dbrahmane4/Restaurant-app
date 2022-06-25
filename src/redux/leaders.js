// import { LEADERS } from "../shared/leaders";
import * as ActionTypes from './ActionType';


export const Leaders = (state= { isLoading: true,
    err: null,
    leaders:[]}, action) => {
    switch(action.type){
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, err: null, leaders: action.payload};
    
            case ActionTypes.PROMOS_LOADING:
                return {...state, isLoading: true, err: null, leaders: []}
    
            case ActionTypes.PROMOS_FAILED:
                return {...state, isLoading: false, err: action.payload};
        default:
            return state;
    }
}