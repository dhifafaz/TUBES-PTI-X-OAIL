import React from 'react';
import { 
  Text, 
  SafeAreaView, 
  View, 
  TextInput, 
  TouchableOpacity } from 'react-native';
import styles from '../style/LoginPageStyles';
import { Image,  } from 'react-native-elements';
const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={ require('../assets/logo.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.input}>
        <TextInput 
          placeholder='Username'
          style={styles.inputArea}
        />
        <TextInput
          placeholder='Password'
          style={styles.inputArea}
        />
      </View>
      <View style={styles.masukButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>       
      </View>
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
          <Text style={styles.reset}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
