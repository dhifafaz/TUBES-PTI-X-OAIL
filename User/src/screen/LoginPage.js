import React, { useState, useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

  const navigation = useNavigation();

  const [id, setId] = useState(null)
  const [token, setToken] = useState(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [checkToken, setCheckToken] = useState(null)

  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    try {
      AsyncStorage.getItem('token').then(value => {
        if (value != null) {
          navigation.navigate('MainContainer')
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const setData = async () => {
    if (checkToken != null) {
      try {
        var user = {
          id: checkToken.user['id'],
          token: checkToken.token
        }
        await AsyncStorage.setItem('token', JSON.stringify(user));
        navigation.navigate('MainContainer')
      } catch (error) {
        console.log(error);
      }
    }
  }



  const toRegister = () => {
    navigation.navigate('Register', {})
  }


  const loginUser = (credentials) => {

    return fetch(`http://192.168.42.104:8000/sirius_api/login_user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    }).then(response => response.json())
      .then(response => {
        setCheckToken(response)
        console.log(response)
      })
      .catch(error => console.log(error))
      .finally(() => setData())

  };

  //console.log(checkToken.user['id'])

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

          loginUser({
            email,
            password
          })


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
