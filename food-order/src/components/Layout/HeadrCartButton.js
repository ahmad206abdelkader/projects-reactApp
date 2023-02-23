import { useContext, useEffect, useState } from "react";
import CartIcon from "../Card/CartIcon";
import CartContext from "../../store/cart-context";
import Classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const [BtnIsHighLighted, setBtnIsHigtLited] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);



    const btnClasses = `${Classes.button} ${BtnIsHighLighted ? Classes.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }

        setBtnIsHigtLited(true);

        const timer = setTimeout(() => {
            setBtnIsHigtLited(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    return (<button className={btnClasses} onClick={props.onClick} >
        <span className={Classes.icon}>
            <CartIcon />

        </span>
        <span>Your Cart</span>
        <span className={Classes.badge}>{numberOfCartItems}</span>
    </button>
    );
};

export default HeaderCartButton;    