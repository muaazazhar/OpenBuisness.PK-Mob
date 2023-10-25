import {Platform, StyleSheet} from 'react-native';
import {screenHeight} from '../../constants/screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../constants/colors';

const Styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: RFValue(10, screenHeight),
    marginHorizontal: RFValue(20, screenHeight),
    height: screenHeight * 0.1,
    borderRadius: 10,
    paddingHorizontal: 20,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  sellTab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: RFValue(70, screenHeight),
    height: RFValue(70, screenHeight),
    backgroundColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 70,
    marginBottom:
      Platform.OS == 'android'
        ? RFValue(60, screenHeight)
        : RFValue(40, screenHeight),
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 20,
  },
});

export default Styles;
