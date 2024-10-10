import styled from 'styled-components';
import { ScreenWrapper } from '../-layout.styled';
import { colors } from '../../../utils/colors';

export const RutinaWrapper = styled(ScreenWrapper)`
  padding: 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey};
`;
export const Name = styled.div`
  padding: 12px 0 38px 0;
`;

export const RutineImgContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const RutineImg = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 200px;
`;

export const ImgDesc = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 15px 11px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  border-radius: 0 13px 13px 0;
  font-size: 12px;
`;

export const Steps = styled.div`
  padding: 16px 8px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 14px;
`;
