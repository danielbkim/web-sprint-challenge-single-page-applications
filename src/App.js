import React, { useState } from "react";
import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';


const initialOrders = [
  {
    name: 'Daniel',
    pizzaSize: 10,
    toppings: ['Extra cheese', 'Meatball'],
    specialInstructions: 'leave pizza at the door'
  },
  {
    name: 'Charles',
    pizzaSize: 12,
    toppings: ['Pepperoni'],
    specialInstructions: 'tip is in the mailbox'
  },
  {
    name: 'George',
    pizzaSize: 10,
    toppings: ['Sausage'],
    specialInstructions: 'drive safely'
  },
  {
    name: 'Sarah',
    pizzaSize: 10,
    toppings: [],
    specialInstructions: 'it\'s free if it takes longer than 30 minutes right'
  }
];

const initialFormValues = {
  name: "",
  pizzaSize: "",
  extraCheese: false,
  pepperoni: false,
  meatball: false,
  sausage: false
};

const App = () => {
  // create your slices of state
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  // set up state of validations later



  // POSTING A NEW ORDER LOGIC HERE
  const postNewOrder = (newOrder) => {
    axios
      .post('https://reqres.in/', newOrder)
      .then((response) => {
        // console.log(response);
        // CALL SETORDERS to SET THE STATE after YOU'VE SUBMITTED
        setOrders([response.data, ...orders]);
        // RESET THE FORM VALUES UPON SUBMIT
        setFormValues(initialFormValues);
      })
  };

  // SUBMITTING FORM LOGIC
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ["Extra Cheese", "Pepperoni", "Sausage", "Meatball"].filter(
        (topping) => formValues[topping]
      )
    }
  };

  return (
    <>
      <nav>
        <h1 className='home-header'>Lambda Eats</h1>
        <div className='nav-links'>
            <NavLink to='/'>Home</NavLink>
            <br></br>
            <NavLink to='/pizza'>Order</NavLink>
            <p>Your favorite food delivered while coding</p>
        </div>
      </nav>
      <Switch>
        <Route path='/pizza'>
            <Form orders={ orders } submit={ formSubmit } values={ formValues } />
        </Route>
        <Route path='/'>
            <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
