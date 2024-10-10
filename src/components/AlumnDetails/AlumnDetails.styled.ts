import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;

export const AlumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AlumnInfo = styled(AlumnWrapper)`
  padding: 0 21px 36px;
`;

export const PlanBadgeWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 4px 14px 4px 4px;
  border: 1px solid ${colors.white}5E;
  border-radius: 23px;
  background-color: ${colors.black};
  position: absolute;
  left: 20px;
  top: -16px;
  align-items: center;
`;
export const PlanInnerBadge = styled.div`
  display: flex;
  padding: 4px;
  background-color: ${colors.green};
  border-radius: 23px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${colors.black}B2;
  padding: 32px 28px;
  position: relative;
`;

export const StyledRow = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
