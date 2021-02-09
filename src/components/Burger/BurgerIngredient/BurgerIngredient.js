import React from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    let ingredient = null;


    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (<div className={classes.BreadTop}>
                <div clasName={classes.Seeds1}></div>
                <div clasName={classes.Seeds2}></div>
            </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>
            break;
        default:
            ingredient = null;
        }
        
    return ingredient;
}

burgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
};


export default burgerIngredient;