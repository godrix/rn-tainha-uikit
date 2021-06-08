import Constants from 'expo-constants';
import { Platform } from 'react-native'
import * as Application from 'expo-application';

const isDevice = Constants.isDevice && Application.applicationName !== 'Expo Go';
const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';
const deviceName = Constants.deviceName;
const platform = Constants.platform;
const systemVersion = Constants.systemVersion;
const deviceYearClass = Constants.deviceYearClass;
const applicationName = Application.applicationName;
const applicationId = Application.applicationId;
const nativeApplicationVersion = Application.nativeApplicationVersion;
const nativeBuildVersion = Application.nativeBuildVersion;
const isExpoGo = Application.applicationName === 'Expo Go';

export const system = {
  isDevice,
  platform,
  systemVersion,
  applicationId,
  applicationName,
  nativeApplicationVersion,
  nativeBuildVersion,
  deviceName,
  deviceYearClass,
  isAndroid,
  isIOS,
  isExpoGo,
  allInfo: `${isDevice};${platform};${systemVersion};${applicationId};${applicationName};${nativeApplicationVersion};${nativeBuildVersion};${deviceName};${deviceYearClass}`
}