import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../../components/Input/Input';
import Styles from './styles';
import Body from '../../components/Body/Body';
import GoogleAuth from '../../components/GoogleAuth/GoogleAuth';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    location: '',
    password: '',
    cnfrmPass: '',
  });
  const handleSignUp = () => {
    console.log(formData);
  };
  return (
    <Body>
      <KeyboardAvoidingView style={Styles.container}>
        <ScrollView contentContainerStyle={Styles.scrollContainer}>
          <Text style={Styles.title}>Welcome!</Text>
          <Text style={Styles.description}>
            Enter Your credentials to Create An Account to start Posting Ads!
          </Text>
          <Input
            label="Full Name"
            type="text"
            max={80}
            value={formData.name}
            onChange={text => {
              setFormData({...formData, name: text});
            }}
          />
          <Input
            label="Email Address"
            type="email"
            max={80}
            value={formData.email}
            onChange={text => {
              setFormData({...formData, email: text});
            }}
          />
          <Input
            label="Phone No."
            type="tel"
            max={80}
            value={formData.contactNo}
            onChange={text => {
              setFormData({...formData, contactNo: text});
            }}
          />
          <Input
            label="Address"
            type="text"
            max={80}
            value={formData.location}
            onChange={text => {
              setFormData({...formData, location: text});
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
          <Input
            label="Confirm Password"
            type="text"
            max={80}
            value={formData.cnfrmPass}
            onChange={text => {
              setFormData({...formData, cnfrmPass: text});
            }}
          />
          <View style={Styles.btnWrapper}>
            <TouchableOpacity style={Styles.submitBtn} onPress={handleSignUp}>
              <Text style={Styles.btnTxt}>Signup</Text>
            </TouchableOpacity>
            <GoogleAuth />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Body>
  );
};

export default Signup;
