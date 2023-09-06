import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import "./App.css";
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 as getId } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: getId(), product, quantity }]);
  };
  // const items = [
  // { id: 1, product: "Lemon", quantity: 3 },
  // { id: 2, product: "Wafers", quantity: 4 },
  // ];

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
