

import React, { useState } from "react";

import Item from "./Item";
import NewItemForm from "./NewItemForm";


const ShoppingList = () => {
  const INITIAL_STATE = [
    { id:1, name: "milk", qty: 3 },
    { id:2, name: "cookies", qty: 2 },
  ];

  const [items, setItems] = useState(INITIAL_STATE);

  const addItem = (name,qty)=>{
    setItems(items=>[...items,{name,qty}])
  }
  return (
    <div className="container">
      <h3>Shopping List</h3>
      <NewItemForm addItem={addItem}/>
      <div>
        {items.map(({ id, name, qty }) => (
          <Item id={id} name={name} qty={qty} key={id} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;