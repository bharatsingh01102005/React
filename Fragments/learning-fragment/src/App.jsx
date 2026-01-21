
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Conatiner";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let foodItems = ["dal", "Green Vegetable", "Roti", "Salad", "Milk"];

  let [textToShow, setTextState] = useState();

  const handleOnchange = (event) => {
    setTextState(event.target.value);
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>

      <ErrorMessage items={foodItems} />
      <FoodInput handleOnchange={handleOnchange} />
      <p>{textToShow}</p>
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
