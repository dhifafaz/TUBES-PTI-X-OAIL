import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from '../style/LoginPageStyles';
import { Image, } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();

  const toRegister = () => {
    navigation.navigate('Register', {})
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (credentials) => {

    return fetch(`http://192.168.43.140:8000/sirius_api/login_user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    }).then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error))

  };

  // const handleLogin = () => {
  //   const token = loginUser({
  //     email,
  //     password
  //   });

  //   console.log(token)
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder='Email'
          style={styles.inputArea}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder='Password'
          style={styles.inputArea}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <TouchableOpacity
        style={styles.masukButton}
        onPress={() => {
          const token = loginUser({
            email,
            password
          });
          console.log(token)


        }}
      >
        <Text style={styles.buttonText1}>Masuk</Text>
      </TouchableOpacity>

      <View style={styles.forgetPass}>
        <Text style={styles.forget}>Lupa password ?</Text>
        <TouchableOpacity
          style={styles.reset}
          onPress={navigation.navigate('Login')}>
          <Text style={styles.reset}>Reset password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.daftarNavigate}>
        <Text style={styles.forget}>Belum memiliki akun ?</Text>
        <TouchableOpacity
          style={styles.reset}
          onPress={navigation.navigate('Login')}>
          <Text style={styles.reset} onPress={toRegister}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
