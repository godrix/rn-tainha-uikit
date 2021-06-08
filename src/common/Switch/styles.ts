import styled from 'styled-components/native';

import colors from '../constants/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  width: 100%;
`;

export const Label = styled.Text`
  color: ${colors.primary};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;
