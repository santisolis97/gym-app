import React, { HTMLProps } from 'react';
import { StyledInput } from './Input.styled';

export const Input = (props: HTMLProps<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};
