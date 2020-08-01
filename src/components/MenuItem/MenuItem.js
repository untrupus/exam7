import React from "react";
import './MenuItem.css';

const MenuItem = props => {
    let itemClass = ['img'];
    itemClass.push(props.class);
    return (
        <div className="item" onClick={props.click}>
            <div className="itemInner">
                <p>{props.name}</p>
                <span>Price: {props.price} KGS</span>
            </div>
            <div className={itemClass.join(' ')}></div>

        </div>
    )
}

export default MenuItem;