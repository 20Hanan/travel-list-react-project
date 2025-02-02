import { useState } from "react";
import  Logo  from "./Logo";
import  Form  from "./Form";
import  PackingList  from "./PackingList";
import  Stats  from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  function handleItems(item) {
    setItems(items => [...items, item]);
  }
  function handleDeletedItems(id) {
    setItems(items => items.filter(item => item.id !== id));
  }
  function handleToggleItems(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function handleClear() {
    const confirm = window.confirm("are you sure u wanna delete the list ?");
    if (confirm) {
      setItems([]);
    }
  }
  return (
    <>
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        items={items}
        handleDeletedItems={handleDeletedItems}
        handleToggleItems={handleToggleItems}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
