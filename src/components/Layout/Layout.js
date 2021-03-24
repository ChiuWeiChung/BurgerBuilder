import React from 'react';
import Aux from '../../hoc/auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends React.Component {

    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    SideDrawerOpenHandler = () => {
        // this.setState({ showSideDrawer: true });
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <div>
                    <Toolbar
                        drawerToggleClicked={this.SideDrawerOpenHandler}
                        isAuth={this.props.isAuthenticated}
                    />
                    <SideDrawer
                        open={this.state.showSideDrawer}
                        closed={this.SideDrawerClosedHandler}
                        isAuth={this.props.isAuthenticated}
                    />
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout)