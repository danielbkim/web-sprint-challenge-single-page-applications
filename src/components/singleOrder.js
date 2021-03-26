import React from 'react';

export default function SingleOrder(props) {
    const { orders } = props;
    return(
        <div>
            {/* <h3>test</h3> */}
            {
                orders.map((order) => {
                    return (
                        <div>
                            <h3>{ order.name }</h3>
                            <p>{ order.pizzaSize + '" pie'}</p>
                            <p>Toppings: { order.toppings.map(
                                (topping) => {
                                    return (
                                        <p>{ topping }</p>
                                    )
                                }
                            ) }</p>
                            <p>{ order.specialInstructions }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}