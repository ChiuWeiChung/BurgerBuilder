import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingType, isMore) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingType,
        isMore
    }
}


const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
}


export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = (showError) => {
    return (dispatch) => {
        axios.instance.get('/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data))
            }).catch(error => {
                showError(true,error.message);
                dispatch(fetchIngredientsFailed())
            })
        return {

        }
    }
}

