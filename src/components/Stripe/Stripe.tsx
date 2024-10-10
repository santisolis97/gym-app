import React, { ReactNode } from 'react';
import { StyledStripe } from './Stripe.styled';
import { Typography } from '../Typography/Typography';

type StripeProps = {
  text: string;
  icon?: ReactNode;
  backgroundColor: string;
  textColor: string;
  onClick?: () => void;
  textSize?: string;
};
export const Stripe = ({
  backgroundColor,
  icon,
  text,
  textColor,
  onClick,
  textSize,
}: StripeProps) => {
  return (
    <StyledStripe onClick={onClick} backgroundColor={backgroundColor}>
      {icon}
      <Typography
        fontFamily='Lexend Tera'
        fontWeight={800}
        color={textColor}
        fontSize={textSize ? textSize : '13px'}
      >
        {text}
      </Typography>
    </StyledStripe>
  );
};
