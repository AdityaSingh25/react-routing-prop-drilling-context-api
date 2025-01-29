import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom", // should be unique for diff diff atoms
  default: 0,
});
