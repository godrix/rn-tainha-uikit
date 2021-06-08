import styled from 'styled-components/native';

import colors from '../constants/colors';

interface ContainerProps {
  error: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  border-width: 1px;
  border-color: ${props => (props.error ? colors.red : '#cecece')};
  background: #fff;
`;

export const Label = styled.Text`
  color: ${colors.primary};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;
