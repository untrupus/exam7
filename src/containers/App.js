import React, {useState} from 'react';
import './App.css';
import MenuItem from "../components/MenuItem/MenuItem";
import Price from "../components/Price/Price";
import OrderItem from "../components/OrderItem/OrderItem";

function App() {
    const menuItems = [
        {name: 'Hamburger', price: 80, class: 'hamburger'},
        {name: 'Cheeseburger', price: 100, class: 'cheeseburger'},
        {name: 'Hot Dog', price: 60, class: 'hotdog'},
        {name: 'Water', price: 25, class: 'water'},
        {name: 'Tea', price: 40, class: 'tea'},
        {name: 'Cola', price: 30, class: 'cola'},
    ];

    const [order, setOrder] = useState([
        {name: 'Hamburger', price: 80, count: 0},
        {name: 'Cheeseburger', price: 100, count: 0},
        {name: 'Hot Dog', price: 60, count: 0},
        {name: 'Water', price: 25, count: 0},
        {name: 'Tea', price: 40, count: 0},
        {name: 'Cola', price: 30, count: 0},
    ]);

    const addItem = name => {
        const index = order.findIndex(p => p.name === name);
        const orderCopy = [...order];
        const orderItem = {...orderCopy[index]};
        orderItem.count++;
        orderCopy[index] = orderItem;
        setOrder(orderCopy);
    }

    const removeItem = name => {
        const index = order.findIndex(p => p.name === name);
        const orderCopy = [...order];
        const orderItem = {...orderCopy[index]};
        if (orderItem.count > 0) {
            orderItem.count--;
        }
        orderCopy[index] = orderItem;
        setOrder(orderCopy);
    }

    let menu = menuItems.map((item) => {
        return (
            <MenuItem
                key={item.name}
                name={item.name}
                price={item.price}
                class={item.class}
                click={() => addItem(item.name)}
            />
        )
    })

    let orderDetails = order.map((orderItem) => {
        return (
            <OrderItem
                key={orderItem.name}
                name={orderItem.name}
                count={orderItem.count}
                price={orderItem.price}
                click={() => removeItem(orderItem.name)}
            />
        )
    });

  return (
    <div className="App">
        <div className="header">
            <h3>Order details:</h3>
            <h3>Add items</h3>
        </div>

        <div className="order">
            {orderDetails}
            <Price priceAmount={order}/>
        </div>

        <div className="items">
            {menu}
        </div>
    </div>
  );
}

export default App;
