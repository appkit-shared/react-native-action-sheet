import {
  Platform
} from 'react-native';

let actionSheet
if (Platform.OS === 'ios') {
  actionSheet = require('./ActionSheetIos');
} else {
  actionSheet = require('./ActionSheetAndroid');
}
export default actionSheet
