import { Fragment } from "react";

import HeaderCartButton from "./HeadrCartButton";
import mealsImage from '../../assets/646937.jpg';
import classes from './Header.module.css';



const Header = (props) => {
    return (<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="table food " />
        </div>
    </Fragment>);
};



export default Header;