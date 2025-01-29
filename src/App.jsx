import { useState } from "react";


function App() {
  const [items, setItems] = useState([]);
  function handleItems(item) {
    setItems(items => [...items, item]);
  }
  function handleDeletedItems(id){
    setItems(items => items.filter((item)=>item.id!==id))
  }
  function handleToggleItems(id){
    setItems(items=>items.map(item=>item.id===id?{...item,packed: !item.packed}:item))
  }
  return (
    <>
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        items={items}
        handleDeletedItems={handleDeletedItems}
        handleToggleItems={handleToggleItems}
      />
      <Stats />
    </>
  );
}

function Logo() {
  return <h1>🌴Far Away 💼</h1>;
}

function Form({ handleItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    handleItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your 🤩 trip ?</h3>
      <select
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option
            value={num}
            key={num}
          >
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({items,handleDeletedItems,handleToggleItems}) {
  return (
    <div className="list">
      <ul>
        {items.map(item => (
          <Item
            item={item}
            key={item.id}
            handleDeletedItems={handleDeletedItems}
            handleToggleItems={handleToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, handleDeletedItems, handleToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={()=>handleToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeletedItems(item.id)}>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>you have x items on your list, and you already packed x (x%)</em>
    </footer>
  );
}
export default App;
