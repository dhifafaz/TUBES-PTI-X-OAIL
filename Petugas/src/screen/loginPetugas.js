import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable
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

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const setData = async (respons) => {
    //if (checkToken != null) {
    try {
      var user = {
        id: respons.user['id'],
        token: respons.token
      }
      await AsyncStorage.setItem('token', JSON.stringify(user));
      navigation.navigate('MainContainer')
    } catch (error) {
      console.log(error);
    }
    //}
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

  const loginUser = async (credentials) => {

    return await fetch(`http://192.168.43.140:8000/sirius_api/login_user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    }).then(response => response.json())
      .then(response => {
        setCheckToken(response)
        console.log(response)
        if (response.token != null) {
          if (response.user.role === 'admin' && response.token != null) {
            console.log('chek masuk gak nya')
            setData(response)
          } else {
            console.log('Salah')
            setModalVisible(true)
          }
        }
        else if (response.non_field_errors[0] == "Incorrect Credentials") {
          console.log('Salah')
          setModalVisible(true)
        }
      })
      .catch(error => console.log(error))

  };


  return (
    <SafeAreaView style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Sandi atau Email Salah</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Masuk Lagi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
