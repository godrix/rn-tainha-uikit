import styled, { css } from 'styled-components/native';

import colors from '../constants/colors';

interface ButtonStyledProps {
  link: boolean;
}

export const Container = styled.TouchableOpacity<ButtonStyledProps>`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  ${props => !props.link && `background: ${colors.primary};`}
  ${props =>
    props.link &&
    css`
      border: ${colors.primary} 1px solid;
    `}
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const Label = styled.Text<ButtonStyledProps>`
  ${props =>
    props.link
      ? css`
          color: ${colors.primary};
        `
      : css`
          color: ${colors.white};
          font-weight: bold;
        `}

  text-transform: uppercase;
`;
