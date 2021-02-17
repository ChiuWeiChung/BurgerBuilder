import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props)=>{
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button onClick={()=>props.added(props.type,false)} className={classes.Less} disabled={props.disabledInfo} >Less</button>
            <button onClick={()=>props.added(props.type,true)} className={classes.More}  >More</button>
        </div>
    )
}


export default buildControl