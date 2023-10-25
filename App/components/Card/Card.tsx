import React, {useEffect, useState} from 'react';
import {Animated, Easing, Image, Text, View} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Styles from './styles';

const Card = () => {
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  }, [opacity]);
  return (
    <Animated.View style={[{...Styles.mainContainer, opacity}]}>
      <View style={Styles.headerContainer}>
        <UserAvatar size={50} style={Styles.avatar} name="Avishay Bar" />
        <View>
          <Text style={Styles.headerText}>User Name</Text>
          <Text style={Styles.headerText}>Date</Text>
        </View>
      </View>
      <Image
        source={{
          uri: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
        }}
        style={Styles.sampleImage}
      />
      <Text style={Styles.adName}>Ad Name</Text>
      <Text style={Styles.bodyText}>Price</Text>
      <Text style={Styles.bodyText}>Description</Text>
      <Text style={Styles.locText}>Location</Text>
    </Animated.View>
  );
};

export default Card;
