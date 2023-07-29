import { atom } from "jotai";

export type Mode = "View" | "Check";

/**
 * 현재 View모드(0)인지, Check모드(1)인지
 */
export const modeState = atom<Mode>("View");
