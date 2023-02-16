import MealsSummery from "./MealsSummery";

import AvaliableMeals from "./AvailableMeals";
import { Fragment } from "react";


const Meals = () => {
  return (
    <Fragment>
       <MealsSummery /> 
       <AvaliableMeals />
    </Fragment>
  )
};

export default Meals;