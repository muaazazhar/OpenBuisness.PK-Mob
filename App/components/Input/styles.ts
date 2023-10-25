import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../constants/screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../constants/colors';
import {FontFamily} from '../../constants/fonts';

const Styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.03,
    width: screenWidth * 0.8,
    marginBottom: RFValue(50, screenHeight),
  },
  label: {
    fontSize: RFValue(14, screenHeight),
    color: Colors.black,
    marginLeft: RFValue(1, screenWidth),
    fontFamily: FontFamily.Bold,
  },
  inputWrapper: {
    borderWidth: 2,
    borderColor: Colors.grey,
    borderRadius: RFValue(10, screenHeight),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    fontSize: RFValue(17, screenHeight),
    fontFamily: FontFamily.Meduim,
    padding: RFValue(5, screenWidth),
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  showBtnText: {
    color: Colors.primary,
    fontFamily: FontFamily.Bold,
    textAlign: 'center',
  },
});
export default Styles;
