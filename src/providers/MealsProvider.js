import React, {createContext} from 'react';
import {getMeals} from '../services/MealsService';

export const MealContext = createContext({});

export const MealsProvider = ({children}) => {


  const mealContextContent = {
      getMeals: async () => {
        let response = await getMeals();

        if (response) {
          return response;
        } else {
          console.log('error', ); //@DEBUG
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