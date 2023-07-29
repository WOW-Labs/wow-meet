import { TYPO } from "~/styles/typo";
import { css } from "@emotion/react";

export const controllerStyle = {
  outer: css`
    padding: 4px;
    border-radius: 10px;
  `,
  inner: css`
    padding: 8px 0px;
    border-radius: 10px;
  `,
  radius: 10,
  typo: TYPO.text2.Bd,
};
