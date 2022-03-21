import React from 'react';
import { 
  Text, 
  SafeAreaView, 
  ScrollView,
  View, 
  TextInput, 
  TouchableOpacity } from 'react-native';
import styles from '../style/LoginPageStyles';
import { Image,  } from 'react-native-elements';
const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.logo}>
          <Image
            source={ require('../assets/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.input}>
          <TextInput 
            placeholder='Nama Lengkap'
            style={styles.inputArea}
          />
          <TextInput
            placeholder='Input'
            style={styles.inputArea}
          />
          <TextInput 
            placeholder='Password'
            style={styles.inputArea}
          />
          <TextInput 
            placeholder='Konfirmasi Password'
            style={styles.inputArea}
          />
          <TextInput 
            placeholder='Peran'
            style={styles.inputArea}
          />
          <TextInput 
            placeholder='Instansi/Unit/Program Studi'
            style={styles.inputArea}
          />
          <TextInput 
            placeholder='NIK/NRK/NIP/NIM'
            style={styles.inputArea}
          />
          <TextInput 
            placeholder='Alamat'
            style={styles.inputArea}
          />
          <TextInput 
            placeholder='KTP/KSM'
            style={styles.inputArea}
          />
          <TextInput 
            placeholder='Pas Foto'
            style={styles.inputArea}
          />
        </View>
        <View style={styles.masukButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={navigation.navigate('Register')}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>       
        </View>
        <View style={styles.forgetPass}>
          <Text style={styles.forget}>Sudah Memiliki Akun ?</Text>
          <TouchableOpacity 
          style={styles.reset}
          onPress={navigation.navigate('Login')}>
            <Text style={styles.reset}>Masuk</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
