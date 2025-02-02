import { useState } from "react";
import  Item  from "./Item";

export default function PackingList({
  items,
  handleDeletedItems,
  handleToggleItems,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            key={item.id}
            handleDeletedItems={handleDeletedItems}
            handleToggleItems={handleToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={handleClear}>clear</button>
      </div>
    </div>
  );
}
