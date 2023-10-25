import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './App/Screens/Login/Login';
import Header from './App/components/Header/Header';
import Signup from './App/Screens/Signup/Signup';
import BottomNav from './App/components/BottomNav/BottomNav';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const login = false;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={login ? 'HomeScreen' : 'Login'}
        screenOptions={{
          header: ({route, navigation, back}) => (
            <Header title={route.name} navigation={navigation} back={back} />
          ),
        }}>
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Signup} name="Signup" />
        <Stack.Screen
          component={BottomNav}
          name="HomeScreen"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
