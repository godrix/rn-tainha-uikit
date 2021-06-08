import { TextInputMask } from 'react-native-masked-text';

import styled from 'styled-components/native';

import colors from '../constants/colors';

interface ContainerProps {
  error: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: auto;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px 5px 0px;
  padding-left: 10px;
  border-width: 1px;
  border-color: ${props => (props.error ? colors.red : '#cecece')};
  background: #fff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.gray,
})`
  flex: 1;
  padding: 10px 8px;
  font-size: 21px;
  color: #000;
`;

export const InputMask = styled(TextInputMask)`
  flex: 1;
  padding: 10px 8px;
  font-size: 21px;
  color: #000;
`;

export const Label = styled.Text`
  color: ${colors.primary};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Touchable = styled.TouchableOpacity`
  margin-right: 10px;
`;
