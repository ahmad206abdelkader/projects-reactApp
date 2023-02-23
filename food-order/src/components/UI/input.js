import React from 'react';
import classes from './input.module.css';

const Input = React.forwardRef((props, ref) => {
    return <div className={classes.input}>
        <lable htmlfor={props.input.id}>{props.label}</lable>
        <input ref={ref} {...props.input} />
    </div>
});

export default Input;