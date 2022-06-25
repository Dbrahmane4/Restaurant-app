// import { COMMENTS } from '../shared/comments';
import * as ActionType from './ActionType';


export const Comments = (state = {
    err: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionType.ADD_COMMENTS:
            return {...state, err: null, comments: action.payload};
        case ActionType.COMMENTS_FAILED:
            return {...state, err: action.payload};
        case ActionType.ADD_COMMENT:
            const comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};
        default:
          return state;
      }
};