import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';

import { Container, Label } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  value: string;
  loading?: boolean;
  disabled?: boolean;
  link?: boolean;
}

export function Button({
  onPress,
  disabled,
  value,
  loading,
  link = false,
}: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled} link={link}>
      {loading ? <ActivityIndicator /> : <Label link={link}>{value}</Label>}
    </Container>
  );
}
