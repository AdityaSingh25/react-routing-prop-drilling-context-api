import {
  useRecoilState,
  useRecoilValue,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";

import { countAtom } from "./store/atoms/count";

export default function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("is count rerender");

  return (
    <div>
      <CounterRender />
      <Buttons />
    </div>
  );
}

function CounterRender() {
  let count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function Buttons() {
  //let [count, setCount] = useRecoilState(countAtom);
  console.log("button rerender");
  let setCount = useSetRecoilState(countAtom);

  // all 3 are same things
  // setCount(count+1)
  //setCoynt(c=> c+1)
  //setCount(function(c){
  // return c+1

  // so basically we dont need count also in button, we can just have setCount and it will inc/dec count
  return (
    <div>
      <button
        onClick={() => {
          setCount(count=> count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(count=> count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}


// ⭐🌟🌟🌟
// How does it work internally?
// Recoil stores the current state value of countAtom.
// When setCount is called with an updater function (c => c + 1), Recoil:
// Passes the current value of countAtom as the argument c.
// Computes the new value (c + 1).
// Updates the countAtom with this new value.

// Key Takeaway ⭐⭐🌟
// Whenever you use useSetRecoilState, you should always use an updater function if you need the previous state:
