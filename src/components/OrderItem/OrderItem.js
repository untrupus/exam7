import React from "react";
import './OrderItem.css';

const OrderItem = props => {
    return (
        <div className="orderItem">
            <h3>Hamburger</h3>
            <p>x{props.count}</p>
            <p>{props.price} KGS</p>
            <button type="button" className="btn">&#10006;</button>
        </div>
    );
}

export default OrderItem;