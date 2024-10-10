import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export const AlumnosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
`;
export const LogoWrapper = styled.div`
  padding: 68px 96px;
`;
export const Logo = styled.img`
  width: 174px;
  height: 115px;
  z-index: 100;
`;

export const AlumnosList = styled.div`
  padding-top: 13px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const Alumno = styled(Link)`
  background: linear-gradient(
    90deg,
    rgba(230, 254, 88, 0.3) 0%,
    rgba(117, 129, 45, 0.3) 20.36%,
    rgba(0, 0, 0, 0.3) 64%
  );
  background-blend-mode: luminosity;
  padding: 5px 20px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  text-decoration: none;
  &:active {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
`;
