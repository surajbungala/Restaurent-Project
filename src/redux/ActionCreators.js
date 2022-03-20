import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
//import { actionTypes } from 'react-redux-form';

export const addComment = ( dishId, rating, author, comment ) => ({
    type : ActionTypes.ADD_COMMENT,
    payload : {
        dishId : dishId,
        rating : rating,
        author : author,
        comment : comment
    }
});

/**.......... Dishes............................ */
//// thunk: function returns an func

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

//function returns an action
export const dishesLoading = () =>({
    type : ActionTypes.DISHES_LOADING
});

//function returns an action
export const dishesFailed = (errmess) => ({
    type : ActionTypes.DISHES_FAILED,
    payload : errmess
});

//function returns an action
export const addDishes = (dishes) => ({
    type : ActionTypes.ADD_DISHES,
    payload : dishes
});