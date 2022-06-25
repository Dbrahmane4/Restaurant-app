/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
import * as ActionType from './ActionType';


export const Dishes = (state = {
    isLoading: true,
    err: null,
    dishes: []
}, action) => {
    switch(action.type){
        case ActionType.ADD_DISHES:
            return {...state, isLoading: false, err: null, dishes: action.payload};
        case ActionType.DISHES_FAILED:
            return {...state, isLoading: false, err: action.payload, dishes: []};
        case ActionType.DISHES_LOADING:
            return {...state, isLoading: true, err: null, dishes: []};
        default:
             return state;
    }
}