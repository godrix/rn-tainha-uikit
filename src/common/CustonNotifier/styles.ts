import layout from '@constants/layout';
import { system } from '../constants/system';

import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding: 10px;
`;

export const Wrapper = styled.View`
  margin-top: ${layout.statusBarHeight + (system.isAndroid ? 60 : 40)}px;
  padding: 15px;
  width: 100%;
  height: 80px;
  border-radius: 8px;
  background: #fff;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Description = styled.Text`
  color: #696969;
  font-size: 16px;
`;
