import React from 'react';
import OrderList from './OrderList';


export default function Form(props) {
    const { orders } = props
    return(
        <div>
            <form>
                <label>
                    Name:
                    <input name='name' type='text'></input>
                </label>
                <br/>
                <br/>
                <label>
                    Size:
                    <select name='size'>
                        <option>--</option>
                        <option value='8'>8</option>
                        <option value='10'>10</option>
                        <option value='12'>12</option>
                        <option value='14'>14</option>
                    </select>
                </label>
                <br/>
                <br/>
                <label>
                    Toppings:
                    <select name='toppings'>
                        <option>--</option>
                        <option value='Extra Cheese'>Extra Cheese</option>
                        <option value='Pepperoni'>Pepperoni</option>
                        <option value='Sausage'>Sausage</option>
                        <option value='Meatball'>Meatball</option>
                    </select>
                </label>
                <br/>
                <br/>
                <label>
                    Special Instructions:
                    <input name='name' type='dropdown'></input>
                </label>
                <br/>
                <br/>
                <button>place order</button>
            </form>
            <br/>
            <br/>
            <br/>
            <OrderList orders={ orders }/>
        </div>
    )
}