import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {InputProps} from '../../constants/interfaces';
import Styles from './styles';
import {Colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({label, type, max, value, onChange}: InputProps) => {
  const [hidePass, setShowPass] = useState(label.includes('Password'));
  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>{label} :</Text>
      <View style={Styles.inputWrapper}>
        <TextInput
          style={Styles.inputField}
          maxLength={max}
          secureTextEntry={hidePass}
          inputMode={type}
          defaultValue={value}
          onChangeText={onChange}
        />
        {label.includes('Password') && (
          <TouchableOpacity onPress={() => setShowPass(prev => !prev)}>
            <Text style={Styles.showBtnText}>
              <Icon
                name={hidePass ? 'eye-outline' : 'eye-off-outline'}
                size={20}
              />
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
