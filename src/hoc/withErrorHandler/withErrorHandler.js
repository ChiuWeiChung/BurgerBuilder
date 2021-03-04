import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../auxiliary';



const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {



        state = {
            error: null,
            msg: null
        }

        updateWrapperState = (err, msg) => {
            this.setState({ error: err, msg: msg })
        }

        componentWillUnmount() {
            // console.log('Will Unmount', axios.reqInterceptor, axios.resInterceptor);
            axios.instance.interceptors.request.eject(axios.reqInterceptor);
            axios.instance.interceptors.response.eject(axios.resInterceptor);
        }



        errorConfirmedHandler = () => {
            this.setState({ error: null, msg: null });
        }

        render() {
            // console.log(this.state.error)
            // console.log(this.state.msg)

            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error? this.state.msg :null}
                    </Modal>
                    <WrappedComponent {...this.props} err={this.updateWrapperState} />
                </Aux>
            )
        }
    }

}


export default withErrorHandler;