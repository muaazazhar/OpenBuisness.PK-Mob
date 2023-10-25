import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import Input from '../../components/Input/Input';
import Styles from './styles';
import Body from '../../components/Body/Body';

const Login = ({navigation}: any) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleRegister = () => {
    navigation.navigate('Signup');
  };
  const handleSubmit = () => {
    console.log(formData);
    // navigation.reset({index: 0, routes: [{name: 'HomeScreen'}]}); for not allowing users to go back
    navigation.push('HomeScreen');
  };
  return (
    <Body>
      <KeyboardAvoidingView style={Styles.container} behavior="height">
        <Text style={Styles.title}>Welcome Back!</Text>
        <Text style={Styles.description}>
          Enter Your credentials to login to your Account!
        </Text>
        <Input
          label="Email"
          type="email"
          max={80}
          value={formData.email}
          onChange={text => {
            setFormData({...formData, email: text});
          }}
        />
        <Input
          label="Password"
          type="text"
          max={80}
          value={formData.password}
          onChange={text => {
            setFormData({...formData, password: text});
          }}
        />
        <TouchableOpacity style={Styles.submitBtn} onPress={handleSubmit}>
          <Text style={Styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <View style={Styles.registerContainer}>
          <Text style={Styles.registerText}>Don't have an account yet ? </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={Styles.registerBtnText}>Register here</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Body>
  );
};

export default Login;
