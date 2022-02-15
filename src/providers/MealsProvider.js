import React, {createContext, useState} from 'react';
import {getMeals} from '../services/MealsService';

export const MealContext = createContext({});

export const MealsProvider = ({children}) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const mealContextContent = {
      name: 'hello',
      meals,
      getMeals: async () => {
        let response = await getMeals();

        if (response && response.success) {
          // call the setMeals function with the response data
        } else {
          // @TODO handle what to do when response.success is false
        }
      },
  };

  return (
    <MealContext.Provider value={mealContextContent}>
      {children}
    </MealContext.Provider>
  );
};