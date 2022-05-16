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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();

  const [checkToken, setCheckToken] = useState(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getData();
  }, []);

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

  const loginUser = (credentials) => {

    return fetch(`http://192.168.42.184:8000/sirius_api/login_user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    }).then(response => response.json())
      .then(response => {
        setCheckToken(response)
        console.log(checkToken)
      })
      .catch(error => console.log(error))
      .finally(() => {
        console.log(checkToken.user.role)
        if (checkToken.user.role === 'admin') {
          console.log('chek masuk gak nya')
          setData()
        }
      })

  };


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
          secureTextEntry={true}
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
    </SafeAreaView>
  );
};

export default Login;
