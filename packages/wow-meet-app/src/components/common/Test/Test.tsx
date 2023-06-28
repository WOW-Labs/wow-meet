import React from 'react';
import styled from '@emotion/styled';

interface TestProps {
  label?: string;
}

const Test = ({ label }: TestProps) => (
  <>
    <h2>{label}</h2>
  </>
);

export default Test;


