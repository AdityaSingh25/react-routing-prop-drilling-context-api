import { useState } from "react";
import { Context } from "./context";
import { useContext } from "react";

export default function selfTryForContext() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Context.Provider value={{ count, setCount }}>
        <Count />
      </Context.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}

function CountRender() {
  const { count } = useContext(Context);

  return <div>{count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(Context);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

// as Count component didnt uses the Count variable, but even thogh we change the count it will rerender.

// context api doesnot give you the option to stop rerendering the component.

// here's come the recoil/redux.

// so -> Context api doesnt meake rerendering performent, its just to make syntax lighter or it fixes prop drilling



// RecoilRoot
// atom
// useRecoilState
// useRecoilValue
// useSetRecoilState
// selector

