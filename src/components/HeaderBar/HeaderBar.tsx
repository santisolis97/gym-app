import React from 'react';
import { HeadBar } from './HeaderBar.styled';
import BarLogo from '../../images/assets/barLogo.svg';

export const HeaderBar = () => {
  return (
    <HeadBar>
      <img src={BarLogo} />
    </HeadBar>
  );
};
