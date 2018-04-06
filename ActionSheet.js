import {
  Platform
} from 'react-native';

if (Platform.OS === 'ios') {
  module.exports = require('./ActionSheetIos');
} else {
  module.exports = require('./ActionSheetAndroid');
}
