export default function Item({ item, handleDeletedItems, handleToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => handleToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeletedItems(item.id)}>❌</button>
    </li>
  );
}
