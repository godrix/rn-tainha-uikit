import React from 'react';
import { View } from 'react-native';

import { Wrapper } from '../Wrapper';
import { Label, Container, Input, Column, WrapperContainer } from './styles';

const columnMd = {
  small: 20,
  medium: 48,
  large: 75,
};

const columnMdSecundary = {
  small: 75,
  medium: 48,
  large: 20,
};

interface InputGroup {
  size?: 'small' | 'medium' | 'large';
  labelOne?: string;
  labelTwo?: string;
  onChangeTextOne: (text: string) => void;
  onChangeTextTwo: (text: string) => void;
  valueOne: string;
  valueTwo: string;
}

export function InputGroup({
  size = 'large',
  labelOne = '',
  labelTwo = '',
  onChangeTextOne,
  onChangeTextTwo,
  valueOne,
  valueTwo,
}: InputGroup) {
  return (
    <Wrapper>
      <WrapperContainer>
        <Column size={columnMd[size]}>
          <Label size={columnMd[size]}>{labelOne}</Label>
          <Container error={false}>
            <Input onChangeText={onChangeTextOne} value={valueOne} />
          </Container>
        </Column>
        <Column size={columnMdSecundary[size]}>
          <Label size={columnMd[size]}>{labelTwo}</Label>
          <Container error={false}>
            <Input onChangeText={onChangeTextTwo} value={valueTwo} />
          </Container>
        </Column>
      </WrapperContainer>
    </Wrapper>
  );
}
