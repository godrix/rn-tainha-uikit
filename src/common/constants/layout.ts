import { Dimensions } from 'react-native';

import Constants from 'expo-constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const { statusBarHeight } = Constants;

export default {
  windowHeight,
  windowWidth,
  statusBarHeight,
};
