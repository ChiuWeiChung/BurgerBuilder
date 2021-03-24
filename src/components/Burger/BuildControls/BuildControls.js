import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return (
                    <BuildControl
                        type={ctrl.type}
                        added={props.ingredientAdded}
                        key={ctrl.label}
                        disabledInfo={props.disabledInfo[ctrl.type]}
                        label={ctrl.label} />
                )
            })}
            <button
                onClick={props.ordered}
                className={classes.OrderButton}
                disabled={!props.purchasable} >{props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}</button>
        </div>
    )
}


export default buildControls;