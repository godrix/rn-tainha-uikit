import { TextInputMask } from 'react-native-masked-text';

import styled from 'styled-components/native';

import colors from '../constants/colors';

export const Wrapper = styled.View`
  flex-direction: column;
  margin: 10px 0;
`;

export const Container = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px 5px 0px;
  padding-left: 10px;
  border-width: 1px;
  border-color: #cecece;
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

export const Display = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Displaycalendar = styled.View`
  background: red;
  width: 100%;
  height: auto;
  position: absolute;
`;

export const Touchable = styled.TouchableOpacity`
  margin-right: 10px;
`;
