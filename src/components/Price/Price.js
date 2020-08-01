import React from "react";
import './Price.css';

const Price = props => {
    let totalPrice = props.priceAmount.reduce((acc, item) => {
        return acc + (item.count * item.price);
    }, 0);

    return (
        <div className="price">
            <p>Total price: {totalPrice} KGS</p>
        </div>
    );
}

export default Price;