export async function getMeals() {
  try {
    const response = await fetch(
      "https://react-http-max-54195-default-rtdb.firebaseio.com/meals.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    const formattedMeals = [];

    for (const key in data) {
      formattedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }

    return formattedMeals;
  } catch (error) {
    console.log("Error in MealsService", error); //@DEBUG
    return error;
  }
}
