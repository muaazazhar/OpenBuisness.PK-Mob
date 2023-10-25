import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './styles';
import {HeaderProps} from '../../constants/interfaces';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({title, navigation, back}: HeaderProps) => {
  const handleGoback = () => {
    navigation.goBack();
  };
  return (
    <View style={Styles.container}>
      {back && (
        <TouchableOpacity onPress={handleGoback} style={Styles.backBtn}>
          <Text>
            <Icon name="arrowleft" size={25} color={'white'} />
          </Text>
        </TouchableOpacity>
      )}
      <Text style={Styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
