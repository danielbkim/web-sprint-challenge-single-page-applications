import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import OrderList from './OrderList';

export default function Home(props) {
    return(
        <div>
            <h3>Place an Order with Us!</h3>
            <Link to='/pizza'>
                <button>Place an Order</button>
            </Link>
        </div>
    )
}
    
    
    