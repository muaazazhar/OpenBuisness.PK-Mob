import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {screenHeight, screenWidth} from '../../constants/screen';
import {Colors} from '../../constants/colors';
import {FontFamily} from '../../constants/fonts';

const Styles = StyleSheet.create({
  mainContainer: {
    height: screenHeight * 0.4,
    width: screenWidth * 0.42,
    elevation: 5,
    paddingVertical: RFValue(5, screenWidth),
    gap: RFValue(5, screenHeight),
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  headerContainer: {
    flexDirection: 'row',
    gap: RFValue(5, screenWidth),
    marginLeft: RFValue(5, screenWidth),
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  headerText: {
    fontSize: RFValue(7, screenWidth),
    fontFamily: FontFamily.Bold,
    color: Colors.grey,
  },
  sampleImage: {
    width: '97%',
    height: '50%',
    alignSelf: 'center',
  },
  adName: {
    fontSize: RFValue(20, screenHeight),
    fontFamily: FontFamily.ExtraBold,
  },
  bodyText: {
    fontSize: RFValue(14, screenHeight),
    fontFamily: FontFamily.Bold,
  },
  locText: {
    marginTop: RFValue(5, screenHeight),
    fontSize: RFValue(12, screenHeight),
    fontFamily: FontFamily.Meduim,
  },
});

export default Styles;
