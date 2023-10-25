import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../Screens/Home/Home';
import {Colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OwnAds from '../../Screens/OwnAds/OwnAds';
import Chats from '../../Screens/Chats/Chats';
import Sell from '../../Screens/Sell/Sell';
import Settings from '../../Screens/Settings/Settings';
import Styles from './styles';
import {Text, View} from 'react-native';
import {FontFamily} from '../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {screenHeight} from '../../constants/screen';

const BottomNav = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: '#A3C2FF',
        headerShown: false,
        tabBarStyle: Styles.bottomBar,
        tabBarItemStyle: {
          height: '70%',
          alignSelf: 'center',
        },
        tabBarLabelStyle: {
          fontFamily: FontFamily.Bold,
          fontSize: RFValue(13, screenHeight),
        },
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={30} />,
        }}
      />
      <Tabs.Screen
        name="OwnAds"
        component={OwnAds}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="details" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="Sell"
        component={Sell}
        options={{
          tabBarLabel: () => <></>,
          tabBarIcon: ({color}) => (
            <View style={{...Styles.sellTab, borderColor: color}}>
              <Text style={{color, fontFamily: FontFamily.ExtraBold}}>
                Sell
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="wechat" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => <Icon name="cog" color={color} size={24} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomNav;
