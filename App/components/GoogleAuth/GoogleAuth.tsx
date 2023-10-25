import React, {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import Styles from './styles';
import {Colors} from '../../constants/colors';

const GoogleAuth = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '449101112815-f4d6gtbfu504kh4c17j2r036ltb1nhj0.apps.googleusercontent.com',
      offlineAccess: true,
    });
  });
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Info ====>', userInfo);
    } catch (error) {
      console.log('Error ====>', error);
    }
  };
  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Icon}
      color={GoogleSigninButton.Color.Dark}
      style={Styles.btn}
      onPress={signIn}
    />
  );
};

export default GoogleAuth;
