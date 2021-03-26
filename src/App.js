import React, { useState } from "react";

const orders = [
  {
    name: 'Daniel',
    pizzaSize: 10,
    toppings: ['extra cheese', 'meatball'],
    specialInstructions: 'leave pizza at the door'
  },
  {
    name: 'Charles',
    pizzaSize: 12,
    toppings: ['pepperoni'],
    specialInstructions: 'tip is in the mailbox'
  },
  {
    name: 'George',
    pizzaSize: 10,
    toppings: ['sausage'],
    specialInstructions: 'drive safely'
  },
  {
    name: 'Sarah',
    pizzaSize: 10,
    toppings: [],
    specialInstructions: 'it\'s free if it takes longer than 30 minutes right?'
  }
];

const App = () => {


  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Your favorite food delivered while coding</p>

    </>
  );
};
export default App;
