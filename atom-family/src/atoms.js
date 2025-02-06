import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: function (id) {
    return TODOS.find((x) => x.id === id);
  },
});

// find function takes a callback


