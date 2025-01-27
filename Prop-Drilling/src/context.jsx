import { createContext } from "react";

export const CountContext = createContext({
  count: 0,
  setCount: () => {},
}); // this is kind of a teleporter we have created

// and wrap anyone that wants to use the teleported value inside a provider

// when we define this context so a object is returned and it will get stored in CountContext

// there we have many functions which we can use like Provider
