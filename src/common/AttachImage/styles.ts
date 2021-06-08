import styled from 'styled-components/native';

import colors from '../constants/colors';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.View`
  width: 100%;
  margin: 5px 0px 5px 0px;
`;

export const Touchable = styled.TouchableOpacity`
  width: 48%;
  height: 50px;

  background: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const TouchableLabel = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Label = styled.Text`
  color: ${colors.primary};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 5px 0;
`;

export const Attachment = styled.View`
  flex-direction: row;
  margin-top: 5px;
  border: 1px ${colors.primary};
`;

export const ImagePreview = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 2px;

  width: 60px;
  height: 55px;
`;

export const ImagePreviewClose = styled.TouchableOpacity`
  position: absolute;
`;

export const ImagePreviewLabel = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
`;
