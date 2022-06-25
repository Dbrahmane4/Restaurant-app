/* eslint-disable no-unused-vars */
import * as ActionType from './ActionType';
import { baseUrl } from '../shared/baseURL';

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    var newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
      .then(response => response.json())
      .then(response => alert(JSON.stringify(response)))
      .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); })
}
// ----------------------- -----------------
export const addComment = (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: comment
})

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    var newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
      .then(response => response.json())
      .then(response => dispatch(addComment(response)))
      .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });

}
// --------------------------------------------

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl+'dishes')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error('Error ' +response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errMsg = new Error(error.message);
        throw errMsg;
    })
    .then(res => res.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishedFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionType.DISHES_LOADING
});

export const dishedFailed = (err) => ({
    type: ActionType.DISHES_FAILED,
    payload: err
})

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes
})

// ------------------------------------------------------
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl+'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(res => res.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const addComments = (comments) => ({
    type: ActionType.ADD_COMMENTS,
    payload: comments
})

export const commentsFailed = (err) => ({
    type: ActionType.COMMENTS_FAILED,
    payload: err
})

// -------------------------------------------------
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());

    return fetch(baseUrl+'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(res => res.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionType.PROMOS_LOADING
});

export const promosFailed = (err) => ({
    type: ActionType.PROMOS_FAILED,
    payload: err
})

export const addPromos = (promos) => ({
    type: ActionType.ADD_PROMOS,
    payload: promos
})

// ----------------------------------

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());

    return fetch(baseUrl+'leaders')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(res => res.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionType.LEADERS_LOADING
});

export const leadersFailed = (err) => ({
    type: ActionType.LEADERS_FAILED,
    payload: err
})

export const addLeaders = (leaders) => ({
    type: ActionType.ADD_LEADERS,
    payload: leaders
})