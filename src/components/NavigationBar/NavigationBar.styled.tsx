import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { Link } from '@tanstack/react-router';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.black}B0;
  padding: 10px 15px 16px;
  border-radius: 9px 9px 0 0;
`;

export const StyledTab = styled(Link)<{ $isActive: boolean }>`
  all: unset;
  user-select: none;
  color: ${({ $isActive }) => ($isActive ? colors.green : colors.white)};
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;

  justify-content: center;
  flex-direction: column;
`;
