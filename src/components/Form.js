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
                    Toppings:
                    <input type="checkbox" name="extraCheese" value="Extra Cheese"/>
                    <label htmlFor="extraCheese">Extra Cheese</label>
                    <input type="checkbox" name="pepperoni" value="Pepperoni"/>
                    <label htmlFor="pepperoni">Pepperoni</label>
                    <input type="checkbox" name="sausage" value="Sausage"/>
                    <label htmlFor="sausage">Sausage</label>
                    <input type="checkbox" name="meatball" value="Meatball"/>
                    <label htmlFor="meatball">Meatball</label>
                <br/>
                <br/>
                <label>
                    Special Instructions:
                    <input name='name' type='textarea'></input>
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