import React, { useState } from "react";
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';


const initialOrders = [
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
    specialInstructions: 'it\'s free if it takes longer than 30 minutes right'
  }
];

const App = () => {
  // create your slices of state
  const [orders, setOrders] = useState(initialOrders);
  // set up state of validations later

  return (
    <>
      <nav>
        <h1 className='home-header'>Lambda Eats</h1>
        <div className='nav-links'>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/order'>Order</Link>
            <p>Your favorite food delivered while coding</p>
        </div>
      </nav>
      <Switch>
        <Route path='/order'>
            <Form orders={ initialOrders } />
        </Route>
        <Route path='/'>
            <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
