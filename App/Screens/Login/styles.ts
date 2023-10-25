import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {screenHeight, screenWidth} from '../../constants/screen';
import {Colors} from '../../constants/colors';
import {FontFamily} from '../../constants/fonts';

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: RFValue(20, screenHeight),
    flex: 1,
  },
  title: {
    fontSize: RFValue(40, screenHeight),
    color: Colors.black,
    fontFamily: FontFamily.ExtraBold,
  },
  description: {
    fontSize: RFValue(17, screenHeight),
    fontFamily: FontFamily.Regular,
  },
  submitBtn: {
    backgroundColor: Colors.primary,
    width: screenWidth * 0.25,
    height: screenHeight * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(20, screenHeight),
    marginTop: RFValue(10, screenHeight),
  },
  btnTxt: {
    color: Colors.white,
    fontFamily: FontFamily.Bold,
    fontSize: RFValue(20, screenHeight),
  },
  registerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  registerText: {
    fontFamily: FontFamily.Meduim,
  },
  registerBtnText: {
    textDecorationLine: 'underline',
    color: Colors.green,
    fontFamily: FontFamily.Bold,
  },
});

export default Styles;
