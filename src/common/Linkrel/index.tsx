import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';

import { Container, Label } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  value: string;
  disabled?: boolean;
}

export function Linkrel({ onPress, disabled, value }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Label>{value}</Label>
    </Container>
  );
}
