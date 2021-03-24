import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.ADD_INGREDIENTS):
            const ingNumber = action.isMore ? state.ingredients[action.ingType] + 1 : state.ingredients[action.ingType] - 1;
            const updatedIngredients = updateObject(state.ingredients, { [action.ingType]: ingNumber });
            const newPrice = action.isMore ? state.totalPrice + INGREDIENT_PRICES[action.ingType] : state.totalPrice - INGREDIENT_PRICES[action.ingType];
            const updatedState = { ingredients: updatedIngredients, totalPrice: newPrice, building: true };
            return updateObject(state, updatedState);

        case (actionTypes.SET_INGREDIENTS):
            return updateObject(state, { ingredients: action.ingredients, totalPrice: 4.0, error: false, building: false });

        case (actionTypes.FETCH_INGREDIENTS_FAILED):
            return updateObject(state, { error: true });

        default:
            return state
    }
}

export default reducer;