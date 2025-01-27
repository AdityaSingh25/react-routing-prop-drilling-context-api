// context api

import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";

export default function App2() {
  const [count, setCount] = useState(0);

  // and wrap anyone that wants to use the teleported value inside a provider

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRender />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRender() {
  const {count} = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
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

// state management tool like recoil or redux have 100 different optimizations compared to context API

// context API isnt for making your code more performet, it is to make your code more cleaner to lookat

// VS state management tool like recoil or redux are making code more performet.
