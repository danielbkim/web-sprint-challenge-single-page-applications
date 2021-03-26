import React from 'react';
import SingleOrder from './singleOrder';


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
            <SingleOrder orders={ orders }/>
        </div>
    )
}