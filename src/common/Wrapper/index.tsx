import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

interface IWrapperProps {
  children: React.ReactNode;
}

export function Wrapper({ children }: IWrapperProps) {
  return <Container>{children}</Container>;
}
