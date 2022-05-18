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
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

  const navigation = useNavigation();

  const [id, setId] = useState(null)
  const [token, setToken] = useState(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [checkToken, setCheckToken] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);

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

  const setData = async (respons) => {
    console.log(respons)
    if (respons != null) {
      try {
        console.log("HAHAHAHHAHAHA")
        var user = {
          id: respons.user['id'],
          token: respons.token
        }
        await AsyncStorage.setItem('token', JSON.stringify(user))
        // .catch(error => console.log(error))
        // .finally(() => {
        //   console.log('massssssssssssssssuuuuuuuuuuuuuuuuuk')
        //   navigation.navigate('MainContainer', {})
        // })

      } catch (error) {
        console.log(error);
      } finally {
        console.log('masuk sini')
        navigation.navigate('MainContainer')
      }
    }
  }



  const toRegister = () => {
    navigation.navigate('Register', {})
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
        console.log('haaaaaaaaaaaaaaaaaihai')
        console.log(response)
        setCheckToken(response)
        if (response.token != null) {
          setData(response)
        } else if (response.non_field_errors[0] == "Incorrect Credentials") {
          console.log('Salah')
          setModalVisible(true)
        }
        //console.log(response)
        //console.log(checkToken)
        //setData(response)
      })
      .catch(error => console.log(error))

  };

  //console.log(checkToken.user['id'])

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
          secureTextEntry={true}
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
