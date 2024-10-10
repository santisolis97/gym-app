import styled from 'styled-components';

export const StyledStripe = styled.div<{
  backgroundColor: string;
  onClick?: () => void;
  opacity?: number;
}>`
  opacity: ${(props) => props.opacity || 1};
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  gap: 4px;
  display: flex;
  transition: background-color 0.3s ease;
  align-items: center;
  justify-content: center;
  user-select: none;
  z-index: 10;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:active {
    background-color: ${(props) => props.onClick && props.backgroundColor}CC;
  }
`;
