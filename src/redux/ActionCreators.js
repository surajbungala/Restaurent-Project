import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';
//import { actionTypes } from 'react-redux-form';

export const addComment = ( comment ) => ({
    type : ActionTypes.ADD_COMMENT,
    payload : comment
    
});

//----------  Post Comment ---------//

export const postComment = ( dishId, rating, author, comment ) => 
    (dispatch) => { const newComment = {
             dishId : dishId,
             rating : rating,
             author : author,
             comment : comment
                }
    newComment.date = new Date().toISOString();
        return fetch(baseUrl + 'comments', {
            method : 'POST',
            body : JSON.stringfy(newComment),
            headers : { 
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
            })
        .then(response => {
            if (response.ok) {
                return response;
        } 
            else {
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
        .catch(error =>  { console.log('post comments', error.message); 
        alert('Your comment could not be posted\nError: '+error.message); });
};
                  

/**---------Fetch Dishes--------------*/

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    //fetch
    return fetch(baseUrl + 'dishes')

    //Fetch Error Handling

    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
       error => {
            var errmess = new Error(error.message);
            throw errmess;
    })

    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () =>({
    type : ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type : ActionTypes.DISHES_FAILED,
    payload : errmess
});

export const addDishes = (dishes) => ({
    type : ActionTypes.ADD_DISHES,
    payload : dishes
});

/**--------------Fetch Comments------------ */

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')

    //Fetch error handling

    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
       error => {
            var errmess = new Error(error.message);
            throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type : ActionTypes.COMMENTS_FAILED,
    payload : errmess
});

export const addComments = (comments) => ({
    type : ActionTypes.ADD_COMMENTS,
    payload : comments
});

/**----------------Fetch Promotions----------- */

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    //Fetch error handling
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
       error => {
            var errmess = new Error(error.message);
            throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () =>({
    type : ActionTypes.PROMOS_LOADING
});

export const addPromos = (promos) => ({
    type : ActionTypes.ADD_PROMOS,
    payload : promos
});

export const promosFailed = (errmess) => ({
    type : ActionTypes.PROMOS_FAILED,
    payload : errmess
});

/**------------Fetch Leaders------------ **/

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));
    //fetch
    return fetch(baseUrl + 'leaders')
    
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
       error => {
            var errmess = new Error(error.message);
            throw errmess;
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () =>({
    type : ActionTypes.LEADERS_LOADING
});

export const addLeaders = (leaders) => ({
    type : ActionTypes.ADD_LEADERS,
    payload : leaders
});

export const leadersFailed = (errmess) => ({
    type : ActionTypes.LEADERS_FAILED,
    payload : errmess
});

/**------------------- Post Feedback------------------ */
/*
export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});
*/

export const postFeedback = (feedback) => 
    (dispatch) => /*{ const newFeedback = {
             firstname : firstname,
             lastname : lastname,
             telnum : telnum,
             email : email,
             agree : agree,
             contactType : contactType,
             message : message
                }
    newFeedback.date = new Date().toISOString();
    */
     {
        return fetch(baseUrl + 'feedback', {
            method : 'POST',
            body : JSON.stringfy(feedback),
            headers : { 
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
            })
        .then(response => {
            if (response.ok) {
                return response;
        } 
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                   error.response = response;
                    throw error;
                }
                   },
                    error => {
                        throw error;
        })
        .then(response => response.json())
        //.then(response => alert(JSON.stringify(response)))
        .then(response => { console.log('Feedback', response); 
          alert('Thank you for your feedback!\n'+JSON.stringify(response)); })
        .catch(error =>  { console.log('Feedback', error.message); 
            alert('Your feedback could not be posted\nError: '+error.message); });
};

