import { atom } from "jotai";

type UserInfo = {
  name: string;
  password: string;
};

export const defaultInfo: UserInfo = {
  name: "",
  password: "",
};

export const infoAtom = atom<UserInfo>(defaultInfo);
