import React, { useEffect, useMemo, useState } from 'react';
import { Calendar as Calend, LocaleConfig } from 'react-native-calendars';

import { format, addDays } from 'date-fns';

import colors from '../constants/colors';
import { Container, Display, Label, Wrapper } from './styles';

interface InputDateProps {
  label?: string;
  dateInitial?: Date;
  minDate?: Date | undefined;
  maxDate?: Date | undefined;
  onFormatedDate?: React.Dispatch<React.SetStateAction<string>>;
  onSelectedDate?: React.Dispatch<React.SetStateAction<Date>>;
}

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

export function Calendar({
  label = '',
  dateInitial = new Date(),
  minDate = undefined,
  maxDate = undefined,
  onFormatedDate,
  onSelectedDate,
}: InputDateProps) {
  const [visible, setVisible] = useState(false);
  const [dateFormat, setDateFormat] = useState('');
  const [currentDate, setCurrentDate] = useState(dateInitial);

  useEffect(() => {
    setDateFormat(format(currentDate, 'dd/MM/yyyy'));
    if (onFormatedDate) {
      onFormatedDate(format(currentDate, 'dd/MM/yyyy'));
    }
  }, [currentDate, onFormatedDate]);

  function handleToggle() {
    setVisible(!visible);
  }
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Container onPress={handleToggle}>
        <Display>{dateFormat}</Display>
      </Container>
      {visible && (
        <Calend
          minDate={minDate}
          maxDate={maxDate}
          current={dateInitial}
          enableSwipeMonths
          onDayPress={day => {
            setCurrentDate(addDays(new Date(day.timestamp), 1));
            if (onSelectedDate) {
              onSelectedDate(addDays(new Date(day.timestamp), 1));
            }
            handleToggle();
          }}
          theme={{
            selectedDayBackgroundColor: colors.primary,
            dotColor: colors.primary,
            arrowColor: colors.primary,
            monthTextColor: colors.primary,
            indicatorColor: colors.primary,
          }}
        />
      )}
    </Wrapper>
  );
}
