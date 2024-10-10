import styled from 'styled-components';
import weaver from '../../images/assets/weaver.png';
import { colors } from '../../utils/colors';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.grey};
  position: relative;
`;

export const Logo = styled.img`
  width: 174px;
  height: 115px;
  z-index: 100;
`;

export const GhostDiv = styled.div`
  flex: 1;
`;

export const FormButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 9px 15px;
  background: linear-gradient(
    89.98deg,
    rgba(255, 255, 255, 0.4) 0.03%,
    rgba(0, 0, 0, 0.5) 99.99%
  );
  backdrop-filter: blur(4px);
  border-radius: 23px;
`;
export const SwipableContent = styled.div`
  flex: 1;
  width: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Slide = styled.div`
  width: 100%;
`;

export const Button = styled.button<{
  variant: 'Primary' | 'Secondary';
  disabled?: boolean;
  fullWidth?: boolean;
}>`
  all: unset;
  gap: 8px;
  justify-content: center;
  display: flex;
  background-color: ${(props) =>
    props.variant === 'Primary' ? colors.green : colors.secondaryButtonBg};
  border-radius: 23px;
  padding: 12px 16px;
  color: ${colors.black};
  font-family: 'Red Hat Text';
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  transition: background-color 0.3s ease;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  ${({ disabled }) =>
    disabled &&
    `
    background-color: ${colors.grey};
  `}
  &:hover {
    background-color: ${(props) =>
      !props.disabled
        ? props.variant === 'Primary'
          ? colors.hoveredGreen
          : colors.secondaryHover
        : undefined};
    ${({ disabled }) => !disabled && 'transform: scale(0.95);'}
    transition: transform 0.1s ease;
    ${({ disabled }) => disabled && 'cursor: default;'}
  }

  &:active {
    ${({ disabled }) => !disabled && 'transform: scale(0.9);'}
    transition: transform 0.1s ease;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
`;

export const RibbonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  text-align: center;
  justify-content: center;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  background-color: ${colors.black}99;
`;

export const Ribbon = styled.div`
  width: 100%;
  background-color: ${colors.green};
  padding: 10px 16px;
  z-index: 100;
`;

export const InputsWrapper = styled.form`
  border-radius: 23px;
  padding: 10px 12px;
  gap: 8px;
  max-width: 400px;
  background: ${colors.black}66;
  backdrop-filter: blur(4px);
  display: flex;
  width: 70%;
  flex-direction: column;
`;
