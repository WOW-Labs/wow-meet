import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from '@wow-lab/common';

interface TestProps {
  label?: string;
}

const Test = ({ label }: TestProps) => (
  <>
    <Button>{label}</Button>
  </>
);

export default Test;

const Button = styled.div`
  border: 2px solid #${COLORS.primary.blue};
  border-radius: 20px;
  background-color:  ${COLORS.primary.purple};
  width: 150px;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
`;
