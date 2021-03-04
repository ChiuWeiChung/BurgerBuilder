import React from 'react';
import Aux from '../../hoc/auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends React.Component {

    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    SideDrawerOpenHandler = () => {
        // this.setState({ showSideDrawer: true });
        this.setState((prevState)=>{
            return{showSideDrawer:!prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Aux>
                <div>
                    <Toolbar drawerToggleClicked={this.SideDrawerOpenHandler}  />
                    <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout