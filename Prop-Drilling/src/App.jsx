import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <div>
      {count}
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}
function Buttons({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Count
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increasing Count
      </button>
    </div>
  );
}

export default App;
