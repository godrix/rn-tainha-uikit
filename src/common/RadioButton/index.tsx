/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import {
  Container,
  Label,
  RadioContainer,
  RadioBtn,
  RadioLabel,
  RadioBox,
  RadioBtnChecked,
} from './styles';

interface IValueRadioButton {
  value: string | number;
  label: string;
  checked?: boolean;
}

export type IRadioButtonvalues = string | number;

interface IRadioButtonProps {
  label: string;
  values: IValueRadioButton[];
  onChecked: React.Dispatch<React.SetStateAction<string | number>>;
}

export function RadioButton({ label, values, onChecked }: IRadioButtonProps) {
  const [checked, setChecked] = useState<IRadioButtonvalues>('');

  function handleCkeck(value: string | number) {
    setChecked(value);
    onChecked(value);
  }

  useEffect(() => {
    values.forEach(item => {
      if (item.checked) {
        setChecked(item.value);
        onChecked(item.value);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Label>{label}</Label>
      <RadioContainer>
        {values.map(item => (
          <RadioBox
            key={String(item.value)}
            onPress={() => handleCkeck(item.value)}
          >
            <RadioBtn>{checked === item.value && <RadioBtnChecked />}</RadioBtn>
            <RadioLabel>{item.label}</RadioLabel>
          </RadioBox>
        ))}
      </RadioContainer>
    </Container>
  );
}
