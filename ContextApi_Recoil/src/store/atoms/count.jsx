import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom", // should be unique for diff diff atoms
  default: 0,
});



// selector depends on count atom
export const evenSelector = selector({
  key :"evenSelector",
  get: ({get})=>{
    const count = get(countAtom);// this is like dependency in useMemo []
    return count%2;
  }
})

// a selector can depend on atom, atoms, selector, seletors
// in this case it is only depending upon count atom