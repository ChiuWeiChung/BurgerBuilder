import React from 'react';
import Aux from '../../../hoc/auxiliary';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = props.ingredients;
    const listItem = Object.keys(ingredientSummary).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {igKey}:{props.ingredients[igKey]}
                </span>
            </li>
        )
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {listItem}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger"  clicked={props.purchaseCancelled} >CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued} >CONTINUE</Button>

        </Aux>
    )
}


export default orderSummary;