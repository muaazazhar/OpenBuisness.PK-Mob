import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../constants/screen';
import {Colors} from '../../constants/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

export default Styles;
