import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { Wrapper } from '../Wrapper';
import { Container, Label } from './styles';

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '100%',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

interface ISelectProps {
  placeholder?: string;
  items: [{ label: string; value: string | number }];
  onValueChange: (value: string, index: number) => void;
  error?: boolean;
  label?: string;
}

export function Select({
  placeholder = 'Selecione um item',
  items,
  onValueChange,
  error = false,
  label = '',
}: ISelectProps) {
  return (
    <Wrapper>
      {!!label && <Label>{label}</Label>}
      <Container error={error}>
        <RNPickerSelect
          placeholder={{
            label: placeholder,
            value: null,
          }}
          onValueChange={onValueChange}
          style={pickerSelectStyles}
          items={items}
        />
      </Container>
    </Wrapper>
  );
}
