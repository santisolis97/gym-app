import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const LayoutWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const NavigationBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.grey};
  position: relative;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  opacity: 0.12;
  pointer-events: none;
`;
