import styled, { css } from 'styled-components/native';

import colors from '../constants/colors';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  opacity: ${props => (props.disabled ? 0.6 : 1)};
  border-radius: 8px;
`;

export const Label = styled.Text`
  color: ${colors.primary};

  text-transform: uppercase;
`;
