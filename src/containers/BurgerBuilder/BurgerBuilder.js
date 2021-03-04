import React from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
// import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends React.Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error :false,
    }

    componentDidMount() {
        // console.log(this.props);
        axios.instance.get('/ingredients.json')
            .then(res => {
                // console.log(res)
                this.setState({ ingredients: res.data });
            }).catch(error=>{
                // console.log(error.message);
                this.setState({error:true});
                this.props.err(true,error.message);
            })
    }

    updatePurchaseState(ingredients) {

        const total = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)


        this.setState({ purchasable: total > 0 })
    }

    addIngredientHandler = (type, isMore) => {
        const oldCount = this.state.ingredients[type];
        // const updatedCounted = oldCount+1;

        const updatedCounted = isMore === true ? oldCount + 1 : oldCount - 1;
        if (updatedCounted < 0) return
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        // const newPrice = oldPrice+priceAddition
        const newPrice = isMore === true ? oldPrice + priceAddition : oldPrice - priceAddition;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
        }
        // console.log(queryParams);
        queryParams.push('price='+this.state.totalPrice)
        const queryString = queryParams.join('&')

        this.props.history.push({
            pathname:'/checkout',
            search:'?' + queryString
        });

    }




    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null
        let burger =this.state.error?<p>Ingredients can't be loaded!</p>:<Spinner />
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ordered={this.purchaseHandler}
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice}
                        disabledInfo={disabledInfo}
                        ingredientAdded={this.addIngredientHandler} />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice.toFixed(2)}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />;

        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

// export default BurgerBuilder;
export default withErrorHandler(BurgerBuilder, axios);