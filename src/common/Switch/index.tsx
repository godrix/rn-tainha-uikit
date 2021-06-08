/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SwitchProps, Switch as InputSwitch } from 'react-native';

import { Container, Label } from './styles';

interface ISwitchProps extends SwitchProps {
  label: string;
}

export function Switch({ onValueChange, value, label, ...rest }: ISwitchProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputSwitch onValueChange={onValueChange} value={value} {...rest} />
    </Container>
  );
}
