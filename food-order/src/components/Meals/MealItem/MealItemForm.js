import { useRef, useState } from 'react';
import Input from '../../UI/input';
import classes from './MealItemForm.module.css';


const MealItemForm = props => {
    const [amountIsValid] = useState(true);
    const amountInoutRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInoutRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().lenght === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            return '';
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (<form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInoutRef}
            label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />

        <button>+ add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>);
};

export default MealItemForm;
