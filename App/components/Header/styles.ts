import {StyleSheet} from 'react-native';
import {screenHeight} from '../../constants/screen';
import {Colors} from '../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {FontFamily} from '../../constants/fonts';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: screenHeight * 0.1,
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: {width: 2, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: RFValue(25, screenHeight),
    fontFamily: FontFamily.ExtraBold,
  },
  backBtn: {
    position: 'absolute',
    left: '5%',
    top: '32%',
  },
});

export default Styles;
