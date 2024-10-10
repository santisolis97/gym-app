import styled from 'styled-components';

export interface TypographyProps {
  fontFamily: 'Red Hat Text' | 'Lexend Tera';
  fontSize?: string;
  fontWeight?: number;
  color?: string;
  children: React.ReactNode;
}

export const Typography = styled.span<TypographyProps>`
  font-family: ${(props) => props.fontFamily}, sans-serif;
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || 'black'};
  ${(props) => props.fontFamily === 'Lexend Tera' && 'letter-spacing: -2px'};
`;
