import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from '../style/LoginPageStyles';
import { Image, } from 'react-native-elements';

import { Picker } from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native';

const Register = () => {

  const navigation = useNavigation();

  const [id, setId] = useState('');
  const [userData, setUserData] = useState(null)

  const [akhir, setAkhir] = useState('mahasiswa');
  const [text, setText] = useState({
    email: '',
    nama: '',
    password: '',
    role: akhir,
    profiles: {
      prodi_unit_institusi: '',
      alamat: '',
      NRK_NIK_NIP_NIM: '',
      status_verifikasi: '0',
    }


  })
  const handleTextChange = (textChange) => {
    return (val) => {
      setText({ ...text, [textChange]: val });
    }
  }
  const handleTextProfiles = (textChange) => {
    return (val) => {
      setText({
        ...text,
        profiles: {
          ...text.profiles,
          [textChange]: val,
        },
      })
    }
  }






  const insertData = () => {

    return fetch(
      'http://192.168.43.140:8000/sirius_api/register_user/',
      {
        method: 'post',
        body: JSON.stringify(text),
        headers: {
          'Content-Type': 'application/json',
        },
      }

    ).then(response => response.json())
      // .then(response => console.log(response))
      .then((json) => setUserData(json))
      .catch(error => console.log(error))
  }

  const toResgisterAfter = () => {

    insertData()



    if (userData != null && userData.user != null) {

      console.log(userData.user.id)

      navigation.navigate("RegisterAfter", {
        id: userData.user.id
      })
    }

  }

  // console.log(text)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.logo}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder='Nama Lengkap'
            style={styles.inputArea}
            onChangeText={handleTextChange('nama')}
            value={text.nama}
          />
          <TextInput
            placeholder='Email'
            style={styles.inputArea}
            onChangeText={handleTextChange('email')}
            value={text.email}
          />
          <TextInput
            placeholder='Password'
            style={styles.inputArea}
            onChangeText={handleTextChange('password')}
            value={text.password}
          />
          <TextInput
            placeholder='Konfirmasi Password'
            style={styles.inputArea}
          />
          <View style={styles.inputArea1}>
            <Picker
              selectedValue={akhir}
              onValueChange={(value, index) => setAkhir(value)}
              mode="dropdown" // Android only
              style={styles.picker}
              itemStyle={{ alignItems: 'center', justifyContent: 'center' }}

            >

              <Picker.Item label="Mahasiswa" value="mahasiswa" />
              <Picker.Item label="Dosen" value="dosen" />
              <Picker.Item label="Umum" value="masyarakat" />
            </Picker>
          </View>

          <TextInput
            placeholder='Instansi/Unit/Program Studi'
            style={styles.inputArea}
            onChangeText={handleTextProfiles('prodi_unit_institusi')}
            value={text.instansi}
          />
          <TextInput
            placeholder='NIK/NRK/NIP/NIM'
            style={styles.inputArea}
            onChangeText={handleTextProfiles('NRK_NIK_NIP_NIM')}
            value={text.nik}
          />
          <TextInput
            placeholder='Alamat'
            style={styles.inputArea}
            onChangeText={handleTextProfiles('alamat')}
            value={text.alamat}
          />

        </View>

        <TouchableOpacity
          style={styles.masukButton}
          onPress={toResgisterAfter}
        >
          <Text style={styles.buttonText1}>Selanjutnya</Text>
        </TouchableOpacity>

        <View style={styles.forgetPass}>
          <Text style={styles.forget}>Sudah Memiliki Akun ?</Text>
          <TouchableOpacity
            style={styles.reset}

          >
            <Text style={styles.reset}>Masuk</Text>
          </TouchableOpacity>
          <View style={{ height: 40 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
