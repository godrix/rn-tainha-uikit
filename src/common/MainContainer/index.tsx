import React from 'react';

import { Container } from './styles';

interface IMainContainer {
  children: React.ReactNode;
  safeArea?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
  align?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch' | false;
  justify?:
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

export function MainContainer({
  children,
  safeArea = false,
  align = false,
  justify = false,
  paddingHorizontal = 40,
  paddingVertical = 0,
}: IMainContainer) {
  return (
    <Container
      safeArea={safeArea}
      align={align}
      justify={justify}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
    >
      {children}
    </Container>
  );
}
