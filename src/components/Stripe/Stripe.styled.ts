import styled from 'styled-components';

export const StyledStripe = styled.div<{
  backgroundColor: string;
  onClick?: () => void;
}>`
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  display: flex;
  transition: background-color 0.3s ease;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:active {
    background-color: ${(props) => props.onClick && props.backgroundColor}CC;
  }
`;
