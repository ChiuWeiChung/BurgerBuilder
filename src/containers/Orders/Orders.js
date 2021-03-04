import React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends React.Component {
    state = {
        orders: [],
        loading: true
    }


    componentDidMount() {
        axios.instance.get('/orders.json').then(res => {
            const fetchOrders = []
            for (let key in res.data) {
                fetchOrders.push({
                    ...res.data[key],
                    id: key
                })
            }
            this.setState({ loading: false, orders: fetchOrders });
        }).catch(error => {
            this.setState({ loading: false });
            this.props.err(true, error.message);
        })
    }
    render() {
        // console.log(this.state.orders);
        return (
            <div>
                {this.state.orders.map(order => {
                    return (
                        <Order key={order.id}
                            ingredients={order.ingredients}
                            price={order.price}
                        />
                    )
                })}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);