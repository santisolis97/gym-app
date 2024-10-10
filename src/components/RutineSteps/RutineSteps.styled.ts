import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { Typography } from '../Typography/Typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RoundNumberContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RoundNumber = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${colors.green};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: -12px;
`;

export const StyledTypography = styled(Typography)`
    margin-left: -2px;
`

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const Bar = styled.div`
  width: 1px;
  background-color: ${colors.barGrey};
  margin: 0 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  border-radius: 11px;
  border: 1px solid ${colors.textContainerBorder};
  background-color: ${colors.textContainerGrey};
`;
