import React from 'react';
import OrderList from './OrderList';


export default function Form(props) {
    const { orders, values, submit } = props

    const onSubmit = (e) => {
        e.preventDefaults();
        console.log('onSubmit: ', e.target);
        // submit()
    };

    const onChange = (e) => {
        console.log('onChange: ', e.target);
    };

    return(
        <div>
            <form onSubmit={ onSubmit }>
                <label>
                    Name:
                    <input
                        name='username'
                        type='text'
                        onChange={onChange}
                    />
                </label>
                <br/>
                <br/>
                <label>
                    Size:
                    <select name='size' onChange={onChange}>
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
                    <input
                        type="checkbox"
                        name="extraCheese"
                        value="Extra Cheese"
                        checked={values.extraCheese}
                        onChange={onChange}
                    />
                    <label htmlFor="extraCheese">Extra Cheese</label>
                    <input
                        type="checkbox"
                        name="pepperoni"
                        value="Pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                    <label htmlFor="pepperoni">Pepperoni</label>
                    <input
                        type="checkbox"
                        name="sausage"
                        value="Sausage"
                        checked={values.sausage}
                        onChange={onChange}
                    />
                    <label htmlFor="sausage">Sausage</label>
                    <input
                        type="checkbox"
                        name="meatball"
                        value="Meatball"
                        // checked={values.meatball}
                        onChange={onChange}
                    />
                    <label htmlFor="meatball">Meatball</label>
                <br/>
                <br/>
                <label>
                    Special Instructions:
                    <input
                        name='specialInstructions'
                        type='textarea'
                        onChange={onChange}
                    />
                </label>
                <br/>
                <br/>
                <button>Add to Order</button>
            </form>
            <br/>
            <br/>
            <br/>
            <OrderList orders={ orders }/>
        </div>
    )
}