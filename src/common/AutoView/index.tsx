import React, { useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';

import colors from '../constants/colors';
import { Container } from './styles';

const { height } = Dimensions.get('window');

interface AutoViewProps {
  children: React.ReactNode;
}

export function AutoView({ children }: AutoViewProps) {
  const [screenHeight, setScreenHeight] = useState(0);
  const scrollEnable = screenHeight > height;

  const sizeChange = (_: number, contentHeight: number) => {
    setScreenHeight(contentHeight + 100);
  };
  return (
    <ScrollView
      scrollEnabled={scrollEnable}
      onContentSizeChange={sizeChange}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: colors.white }}
    >
      <Container scrollEnabled={scrollEnable}>{children}</Container>
    </ScrollView>
  );
}
