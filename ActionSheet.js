import {
  Platform
} from 'react-native';
import ActionSheetIos from './ActionSheetIos';
import ActionSheetAndroid from './ActionSheetAndroid'

let actionSheet
if (Platform.OS === 'ios') {
  actionSheet = ActionSheetIos;
} else {
  actionSheet = ActionSheetAndroid;
}
export default actionSheet
