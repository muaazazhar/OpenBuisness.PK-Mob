import React from 'react';
import {View} from 'react-native';
import {BodyProps} from '../../constants/interfaces';
import Styles from './styles';

const Body = ({children}: BodyProps) => {
  return <View style={Styles.container}>{children}</View>;
};

export default Body;
