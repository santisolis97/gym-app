import React from 'react';
import {
  Bar,
  Container,
  DescriptionContainer,
  RoundNumber,
  RoundNumberContainer,
  StyledTypography,
  TextContainer,
} from './RutineSteps.styled';
import { Typography } from '../Typography/Typography';
import { colors } from '../../utils/colors';

type Steps = {
  title: string;
  description: string;
};

type StepsProps = {
  steps: Steps[];
};
export const RutineSteps = ({ steps }: StepsProps) => {
  return (
    <Container>
      {steps.map((step, index) => (
        <RoundNumberContainer key={step.title}>
          <RoundNumber>
            <StyledTypography
              fontFamily='Lexend Tera'
              fontSize='12px'
              fontWeight={400}
            >
              {index + 1}
            </StyledTypography>
          </RoundNumber>
          <DescriptionContainer>
            <Bar />
            <TextContainer>
              <Typography
                color={colors.fullWhite}
                fontFamily='Red Hat Text'
                fontSize='12px'
                fontWeight={800}
              >
                {step.title}
              </Typography>
              <Typography
                color={colors.fullWhite}
                fontFamily='Red Hat Text'
                fontSize='9px'
                fontWeight={300}
              >
                {step.description}
              </Typography>
            </TextContainer>
          </DescriptionContainer>
        </RoundNumberContainer>
      ))}
    </Container>
  );
};
