/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface Props {
    /**
     * 배경 색을 지정하는 헥스코드입니다.
    */
    bgColor: string;
}

/**
 * 예제 컴포넌트입니다
*/
const Example = ({bgColor}:Props) => {
    return <Wrapper css={css`background-color: ${bgColor};`}></Wrapper>;
}

const Wrapper = styled.div`
    width: 100px;
    aspect-ratio: 1;
    border-radius: 10px;
`

export default Example