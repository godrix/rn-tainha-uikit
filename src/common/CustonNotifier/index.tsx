import React from 'react';
import { View, Text } from 'react-native';

import { helpers } from '../constants/styles';

import { Container, Wrapper, Title, Description } from './styles';

interface CustonNotifierProps {
  title: string;
  description: string;
}

export function CustonNotifier({ title, description }: CustonNotifierProps) {
  return (
    <Container>
      <Wrapper style={helpers.shadow}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
    </Container>
  );
}
