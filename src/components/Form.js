import React from 'react';
import OrderList from './OrderList';


export default function Form(props) {
    const { orders } = props
    return(
        <div>
            <form>
                <label>
                    Test:
                    <input type='text'></input>
                </label>
            </form>
            <OrderList orders={ orders }/>
        </div>
    )
}