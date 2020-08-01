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



    let menu = menuItems.map((item) => {
        return (
            <MenuItem
                name={item.name}
                price={item.price}
                class={item.class}
            />
        )
    })
  return (
    <div className="App">
        <div className="header">
            <h3>Order details:</h3>
            <h3>Add items</h3>
        </div>

        <div className="order">
            <OrderItem/>
            <Price priceAmount={order}/>
        </div>

        <div className="items">
            {menu}
        </div>
    </div>
  );
}

export default App;
