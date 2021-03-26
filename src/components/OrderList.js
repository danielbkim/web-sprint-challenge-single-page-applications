import React from 'react';

export default function OrderList(props) {
    const { orders } = props;
    return(
        <div>
            {/* <h3>test</h3> */}
            {
                orders.map((order, index) => {
                    return (
                        <div key={ index }>
                            <h3>{ order.name }</h3>
                            <p>{ order.pizzaSize + '" pie'}</p>
                            <h3>Toppings:</h3>
                            { order.toppings.map(
                                (topping, index) => {
                                    return (<ul key={ index }>
                                        <li>{ topping }</li>
                                    </ul>
                                    )
                                }
                            ) }
                            <p>{ order.specialInstructions }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}