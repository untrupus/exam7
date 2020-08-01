import React from "react";
import './EmptyOrder.css';

const EmptyOrder = props => {
    let emptyClass = ['empty'];
    let orderAmount = props.order.reduce((acc, item) => {
        return acc + item.count;
    }, 0);

    if (orderAmount !== 0) {
        emptyClass.push('emptyHide');
    }

    return (
        <div className={emptyClass.join(' ')}>
            <h3>Your order is empty... Choose something.</h3>
            <div className="chooseImg"></div>
        </div>

    );
}

export default EmptyOrder;