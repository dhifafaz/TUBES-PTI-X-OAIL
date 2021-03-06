import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from '../style/RegisterPageStyles';
import { Image, } from 'react-native-elements';

import { Picker } from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native';
import { getLoading } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import AppLoader from '../component/loading/apploader';

const Register = () => {

  const navigation = useNavigation();
  const { isloading } = useSelector(state => state.userReducer);
  const dispatch = useDispatch()

  const toLogin = () => {
    navigation.navigate('Login', {})
  }

  const [userData, setUserData] = useState(null)

  const [akhir, setAkhir] = useState('mahasiswa');
  const [confirmasiPass, setConfirmPass] = useState('')
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

  // useEffect(() => {



  //   if (userData != null && userData.user != null) {

  //     console.log(userData.user.id)

  //     return navigation.navigate("RegisterAfter", {
  //       id: userData.user.id
  //     })
  //   }




  // })


  const insertData = async () => {

    dispatch(getLoading(true))

    return await fetch(
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
      .then((json) => {
        console.log(json['user']['id'])
        dispatch(getLoading(false))
        navigation.navigate("RegisterAfter", {
          id: json['user']['id']
        })
      })
      .catch(error => console.log(error))
    // .finally(() => {
    //   dispatch(getLoading(false))
    //   //console.log(userData.user.id)

    // })
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
          <Text style={styles.title2}>Nama Lengkap</Text>
          <TextInput
            placeholder='Nama Lengkap'
            style={styles.inputArea}
            onChangeText={handleTextChange('nama')}
            value={text.nama}
          />

          <Text style={styles.title2}>Email</Text>
          <TextInput
            placeholder='Email'
            style={styles.inputArea}
            onChangeText={handleTextChange('email')}
            value={text.email}
          />

          <Text style={styles.title2}>Password</Text>
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            style={styles.inputArea}
            onChangeText={handleTextChange('password')}
            value={text.password}
          />

          <Text style={styles.title2}>Konfirmasi Password</Text>
          <TextInput
            placeholder='Konfirmasi Password'
            secureTextEntry={true}
            style={styles.inputArea}
            onChangeText={setConfirmPass}
            value={confirmasiPass}
          />

          <Text style={styles.title2}>Peran</Text>
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

          <Text style={styles.title2}>Instansi/Unit/Program Studi</Text>
          <TextInput
            placeholder='Instansi/Unit/Program Studi'
            style={styles.inputArea}
            onChangeText={handleTextProfiles('prodi_unit_institusi')}
            value={text.instansi}
          />

          <Text style={styles.title2}>NIK/NRK/NIP/NIM</Text>
          <TextInput
            placeholder='NIK/NRK/NIP/NIM'
            style={styles.inputArea}
            onChangeText={handleTextProfiles('NRK_NIK_NIP_NIM')}
            value={text.nik}
          />

          <Text style={styles.title2}>Alamat</Text>
          <TextInput
            placeholder='Alamat'
            style={styles.inputArea}
            onChangeText={handleTextProfiles('alamat')}
            value={text.alamat}
          />

        </View>

        <TouchableOpacity
          style={
            text.email != '' && text.nama != '' && text.password != '' && confirmasiPass == text.password && text.profiles.NRK_NIK_NIP_NIM != '' && text.profiles.alamat != '' && text.profiles.prodi_unit_institusi != '' ?
              styles.masukButton1 : styles.masukButton
          }
          onPress={() => {
            if (text.email != '' && text.nama != '' && text.password != '' && confirmasiPass == text.password && text.profiles.NRK_NIK_NIP_NIM != '' && text.profiles.alamat != '' && text.profiles.prodi_unit_institusi != '') {
              insertData()
            }

          }
          }>
          <Text style={styles.buttonText1}>Selanjutnya</Text>
        </TouchableOpacity>

        <View style={styles.forgetPass}>
          <Text style={styles.forget}>Sudah Memiliki Akun ?</Text>
          <TouchableOpacity
            style={styles.reset}

          >
            <Text style={styles.reset} onPress={toLogin}>Masuk</Text>
          </TouchableOpacity>
          <View style={{ height: 40 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
