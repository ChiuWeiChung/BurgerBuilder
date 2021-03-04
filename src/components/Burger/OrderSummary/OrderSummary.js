import React from 'react';
import Aux from '../../../hoc/auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {



    render() {
        const ingredientSummary = this.props.ingredients;
        const listItem = Object.keys(ingredientSummary).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}:{this.props.ingredients[igKey]}
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
                <p><strong>Total Price:{this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled} >CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued} >CONTINUE</Button>

            </Aux>
        )
    }
}


export default OrderSummary;