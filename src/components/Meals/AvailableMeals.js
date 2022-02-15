import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import React, { useContext, useEffect, useState } from "react";
import { MealContext } from "../../providers/MealsProvider";

const AvailableMeals = () => {
  const { getMeals } = useContext(MealContext);
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    getMeals().then((meals) => {
      if (meals.length !== 0 && !meals.message) {
        setMeals(meals);
      } else {
        setHasError(true)
      }
    });
    setIsLoading(false);
  }, [getMeals]);

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
        {!isLoading && <ul>{mealsList}</ul>}
        {isLoading && <p>Loading...</p>}
        {hasError && <p>Something went wrong</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
