import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../auxiliary';



const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            modalError: null,
            modalMsg: null
        }

        updateWrapperState = (err, msg) => {
            // console.log(this.state);
            this.setState({ modalError: err, modalMsg: msg })
        }



        componentWillUnmount() {
            // console.log('Will Unmount', axios.reqInterceptor, axios.resInterceptor);
            axios.instance.interceptors.request.eject(axios.reqInterceptor);
            axios.instance.interceptors.response.eject(axios.resInterceptor);
        }



        errorConfirmedHandler = () => {
            this.setState({ modalError: null, modalMsg: null });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.modalError} modalClosed={this.errorConfirmedHandler}>
                        {this.state.modalError? this.state.modalMsg :null}
                    </Modal>
                    <WrappedComponent {...this.props}  showError={this.updateWrapperState} />
                </Aux>
            )
        }
    }

}


export default withErrorHandler;