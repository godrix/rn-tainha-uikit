import React, { useImperativeHandle, useRef, useState } from 'react';
import { TextInputProps, TextInput as TI } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../constants/colors';
import { Wrapper } from '../Wrapper';
import {
  Container,
  Input as TextInput,
  InputMask,
  Label,
  Touchable,
} from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  error?: boolean;
  mask?:
    | 'cpf'
    | 'cnpj'
    | 'zip-code'
    | 'money'
    | 'credit-card'
    | 'cel-phone'
    | 'datetime';
  format?: string | undefined;
}
interface forwardRef {
  focus?: () => void;
}

const Input = React.forwardRef<forwardRef, InputProps>(
  (
    {
      label = '',
      secureTextEntry,
      mask,
      error = false,
      format = undefined,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<TI>(null);
    const [visibility, setVisibility] = useState(true);

    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          inputRef.current?.focus();
        },
      }),
      [],
    );

    function handleVisibility() {
      setVisibility(!visibility);
    }

    return (
      <Wrapper>
        <Label>{label}</Label>
        <Container error={error}>
          {mask ? (
            <InputMask
              type={mask}
              {...props}
              ref={inputRef}
              options={{
                format,
              }}
            />
          ) : (
            <TextInput
              ref={inputRef}
              {...props}
              secureTextEntry={secureTextEntry ? visibility : secureTextEntry}
            />
          )}

          {secureTextEntry && (
            <Touchable onPress={handleVisibility}>
              <MaterialCommunityIcons
                name={visibility ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color={colors.primary}
              />
            </Touchable>
          )}
        </Container>
      </Wrapper>
    );
  },
);

export default Input;
