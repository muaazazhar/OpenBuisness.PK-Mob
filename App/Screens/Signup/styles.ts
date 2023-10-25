import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {screenHeight, screenWidth} from '../../constants/screen';
import {Colors} from '../../constants/colors';
import {FontFamily} from '../../constants/fonts';

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: RFValue(40, screenHeight),
    color: Colors.black,
    fontFamily: FontFamily.ExtraBold,
  },
  description: {
    fontSize: RFValue(17, screenHeight),
    fontFamily: FontFamily.Regular,
    textAlign: 'center',
  },
  submitBtn: {
    backgroundColor: Colors.primary,
    width: screenWidth * 0.25,
    height: screenHeight * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(20, screenHeight),
  },
  btnTxt: {
    color: Colors.white,
    fontFamily: FontFamily.Bold,
    fontSize: RFValue(20, screenHeight),
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginText: {
    fontFamily: FontFamily.Meduim,
  },
  loginBtnText: {
    textDecorationLine: 'underline',
    color: Colors.green,
    fontFamily: FontFamily.Bold,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: RFValue(20, screenHeight),
  },
});

export default Styles;
