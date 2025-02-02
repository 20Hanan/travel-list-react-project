export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed && item);
  const percentage = Math.round((numPacked.length / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! Ready to go ✈"
          : `you have ${numItems} items on your list, and you already packed ${numItems} ${percentage}%`}
      </em>
    </footer>
  );
}
