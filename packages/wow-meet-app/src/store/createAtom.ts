import { atom } from "jotai";
import { type Create } from "../type/create";

export const createAtom = atom<Create | null>(null);