import { atom } from "recoil";

/**
 * 현재 View모드(0)인지, Check모드(1)인지
 */
export const modeState = atom<number>({
  key: "mode",
  default: 0,
});
