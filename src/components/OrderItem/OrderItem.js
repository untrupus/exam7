import React from "react";
import './OrderItem.css';

const OrderItem = props => {
    let orderClass = ['orderItem'];
    if (props.count === 0) {
        orderClass.push('orderHide');
    } else {
        orderClass.push('orderShow');
    }

    return (
        <div className={orderClass.join(' ')}>
            <h3>{props.name}</h3>
            <p>x{props.count}</p>
            <p>{props.price} KGS</p>
            <button type="button" className="btn" onClick={props.click}>&#10006;</button>
        </div>
    );
}

export default OrderItem;