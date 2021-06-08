import styled from 'styled-components/native';

import colors from '../constants/colors';

export const Container = styled.View`
  justify-content: space-between;
  margin: 10px 0;
`;

export const Label = styled.Text`
  color: ${colors.primary};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const RadioContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 15px 0;
`;

export const RadioBox = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;

export const RadioBtnChecked = styled.TouchableOpacity`
  background: ${colors.primary};
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export const RadioBtn = styled.View`
  border: 1px ${colors.gray} solid;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
export const RadioLabel = styled.Text`
  color: ${colors.primary};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 10px;
`;
