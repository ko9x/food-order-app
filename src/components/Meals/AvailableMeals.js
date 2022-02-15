import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import React, {useContext, useEffect, useState} from 'react';
import { MealContext } from '../../providers/MealsProvider';

const AvailableMeals = () => {

  const { getMeals } = useContext(MealContext);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals().then(meals => {
      setMeals(meals)
    })
  },[getMeals])

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
