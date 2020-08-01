import React from "react";
import './Price.css';

const Price = props => {
    let totalPrice = props.priceAmount.reduce((acc, item) => {
        return acc + (item.count * item.price);
    }, 0);

    let priceClass = ['price'];
    if (totalPrice === 0) {
        priceClass.push('priceHide');
    }
    return (
        <div className={priceClass.join(' ')}>
            <p>Total price: {totalPrice} KGS</p>
        </div>
    );
}

export default Price;