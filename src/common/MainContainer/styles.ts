import { Platform } from 'react-native';

import styled from 'styled-components/native';

import colors from '../constants/colors';
import layout from '../constants/layout';

interface IContainer {
  safeArea: boolean;
  align: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch' | false;
  paddingHorizontal?: number;
  paddingVertical?: number;
  justify:
    | false
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
}

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})<IContainer>`
  height: ${layout.windowHeight}px;
  width: ${layout.windowWidth}px;
  background-color: ${colors.white};
  padding: ${props =>
    `${props.paddingHorizontal}px ${props.paddingHorizontal}px`};
  ${props => props.align && `align-items: ${props.align} ;`}
  ${props => props.justify && `justify-content: ${props.justify} ;`}
  ${props => props.safeArea && `margin-top: ${layout.statusBarHeight}px;`}
`;
