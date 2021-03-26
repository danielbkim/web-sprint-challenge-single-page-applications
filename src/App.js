import React, { useState } from "react";
import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';

import schema from './validation/formSchema';
import * as yup from 'yup';


const initialOrders = [
  {
    username: 'Daniel',
    pizzaSize: 10,
    toppings: ['Extra cheese', 'Meatball'],
    specialInstructions: 'leave pizza at the door'
  },
  {
    username: 'Charles',
    pizzaSize: 12,
    toppings: ['Pepperoni'],
    specialInstructions: 'tip is in the mailbox'
  },
  {
    username: 'George',
    pizzaSize: 10,
    toppings: ['Sausage'],
    specialInstructions: 'drive safely'
  },
  {
    username: 'Sarah',
    pizzaSize: 10,
    toppings: [],
    specialInstructions: 'it\'s free if it takes longer than 30 minutes right'
  }
];

const initialFormValues = {
  username: "",
  pizzaSize: "",
  extraCheese: false,
  pepperoni: false,
  meatball: false,
  sausage: false
};

const initialFormErrors = {
  username: ""
}

const App = () => {
  // create your slices of state
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  // set up state of validations later
  const [formErrors, setFormErrors] = useState(initialFormErrors);


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

  // LOGIC FOR LETTING A CHANGE HAPPEN BASED ON VALIDATION AND REQUIREMENTS
  const inputChange = (property, value) => {
    // validate the value of the property given
    yup
      .reach(schema, property)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [property]: ""})
      })
      .catch((err) => {
        // use the setFormErrors you built to set state to add the error into the list of errors, if something goes wrong
        setFormErrors({ ...formErrors, [property]: err.errors[0] });
      });
      // if everything goes right, add the value into form values
      setFormValues({
        ...formValues,
        [property]: value
      })
  };

  // SUBMITTING FORM LOGIC
  const formSubmit = () => {
    const newOrder = {
      name: formValues.username.trim(),
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
            <Form orders={ orders } change={ inputChange } submit={ formSubmit } values={ formValues } errors={  formErrors } />
        </Route>
        <Route path='/'>
            <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
