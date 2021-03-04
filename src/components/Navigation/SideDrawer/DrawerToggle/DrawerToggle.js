import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props)=>{

    return(
        <div className={classes.DrawerToggle} onClick={props.show}>
            <div className={classes.Burger}></div>
            <div className={classes.Burger}></div>
            <div className={classes.Burger}></div>
        </div>
    )
}

export default drawerToggle;