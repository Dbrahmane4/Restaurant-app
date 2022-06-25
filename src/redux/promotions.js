import * as ActionTypes from './ActionType';

export const Promotions = (state  = { isLoading: true,
                                        err: null,
                                        promotions:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
        return {...state, isLoading: false, err: null, promotions: action.payload};

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, err: null, promotions: []}

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, err: action.payload};

        default:
          return state;
      }
};