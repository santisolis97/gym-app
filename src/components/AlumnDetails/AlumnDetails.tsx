import React from 'react';
import {
  AlumnInfo,
  AlumnWrapper,
  Avatar,
  InfoWrapper,
  PlanBadgeWrapper,
  PlanInnerBadge,
  StyledRow,
} from './AlumnDetails.styled';
import { Typography } from '../Typography/Typography';
import { colors } from '../../utils/colors';

export type Alumn = {
  firstName: string;
  lastName: string;
  plan: string;
  payment: string;
  owes: string;
  due: string;
  accountState: string;
  profileImg: string;
  phone: string;
};

export type AlumnProps = {
  alumn: Alumn;
  isOwner?: boolean;
};

const Row = ({ left, right }: { left: string; right: string }) => {
  return (
    <StyledRow>
      <Typography
        color={colors.fullWhite}
        fontFamily='Lexend Tera'
        fontSize='13px'
        fontWeight={800}
      >
        {left}
      </Typography>
      <Typography
        color={colors.fullWhite}
        fontFamily='Lexend Tera'
        fontSize='12px'
        fontWeight={400}
      >
        {right}
      </Typography>
    </StyledRow>
  );
};

export const AlumnDetails = ({ alumn, isOwner }: AlumnProps) => {
  return (
    <AlumnWrapper>
      <AlumnInfo>
        <Avatar src={alumn.profileImg} alt='profile' />
        <Typography
          color={colors.fullWhite}
          fontFamily='Lexend Tera'
          fontSize='16px'
          fontWeight={400}
        >
          {isOwner ? 'Bienvenido, ' : 'Alumno '}
          <Typography
            color={colors.fullWhite}
            fontFamily='Lexend Tera'
            fontSize='16px'
            fontWeight={800}
          >
            {isOwner
              ? `${alumn.firstName}!`
              : `${alumn.firstName} ${alumn.lastName}!`}
          </Typography>
        </Typography>
        <Typography
          color={colors.fullWhite}
          fontFamily='Lexend Tera'
          fontSize='12px'
          fontWeight={400}
        >{`Esta es ${isOwner ? 'tu' : 'su'} información actual:`}</Typography>
      </AlumnInfo>
      <InfoWrapper>
        <PlanBadgeWrapper>
          <PlanInnerBadge>
            <Typography
              color={colors.black}
              fontFamily='Lexend Tera'
              fontSize='13px'
              fontWeight={800}
            >
              PLAN
            </Typography>
          </PlanInnerBadge>
          <Typography
            color={colors.green}
            fontFamily='Lexend Tera'
            fontSize='13px'
            fontWeight={800}
          >
            {alumn.plan}
          </Typography>
        </PlanBadgeWrapper>
        <Row left='PAGO:' right={alumn.payment} />
        <Row left='DEBE:' right={`${alumn.owes}$`} />
        <Row left='VENCE:' right={alumn.due} />
        <Row left='ESTADO DE LA CUENTA:' right={alumn.accountState} />
      </InfoWrapper>
    </AlumnWrapper>
  );
};
