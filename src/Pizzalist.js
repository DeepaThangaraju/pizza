import { useState } from 'react';
import { Display } from "./Display";

export function Pizzalist() {
  const [pizza, setPizza] = useState([]);

  fetch("https://6166c4e813aa1d00170a6717.mockapi.io/pizza", { method: "GET" })
    .then((data) => data.json())
    .then((list) => setPizza(list));

  return (
    <div className="dashboard">
      {pizza.map(({ name, toppings, image, rating }, index) => <Display
        name={name}
        toppings={toppings}
        image={image}
        rating={rating} />)}
    </div>
  );
}
