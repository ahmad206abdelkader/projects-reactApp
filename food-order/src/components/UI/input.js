import classes from './input.module.css';

const Input = props => {
    return <div className={classes.input}>
        <lable htmlfor={props.input.id}>{props.label}</lable>
        <input {...props.input} />
    </div>
};

export default Input;