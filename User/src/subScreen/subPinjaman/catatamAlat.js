import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import styles from './catatanPeminjamanStyle';
import { Image, Icon } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import storage, { firebase } from '@react-native-firebase/storage';
import { getLoading } from '../redux/action';

const CatatanAlat = () => {

    const route = useRoute().params
    console.log(route.item.id)

    const navigation = useNavigation();

    //console.log(route)

    const [text, onChangeText] = React.useState("");
    const [imagePicker, setImagePicker] = useState(null);
    const [imageURL, getImageURL] = useState(null)

    const option = {
        title: 'pilih data',
        type: 'library',
        option: {
            selectionLimit: 1,
            mediaType: 'photo',
        }
    }

    const openGalery = async () => {
        const images = await launchImageLibrary(option);
        if (images.didCancel) {
            console.log('cancel Image')
        } else if (images.errorCode) {
            console.log(images.errorMessage)
        } else {
            console.log('masuk nih')
            const data = images.assets[0].uri

            console.log('masuk nih2')
            console.log(data)
            setImagePicker(data)



            // const source = { uri: images.assets[0].uri }
            // setImagePicker(source)
            // console.log(source)
            // console.log(images.assets[0].fileName)
        }

    }
    const uploadPhoto = async () => {

        const uri = imagePicker
        const fileName = uri.substring(uri.lastIndexOf('/') + 1);
        console.log(fileName)
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

        await storage().ref('/catatan_user/' + fileName).putFile(uploadUri)

        // akses.on('state_changed', snapshot => {
        //     setTransferred(
        //         Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
        //     );
        // });

        // try {
        //     await task
        // } catch (e) {
        //     console.error(e);
        // }

        setTimeout(() => {
            let imageProfileRef = firebase.storage().ref('/catatan_user/' + fileName)
            imageProfileRef.getDownloadURL().then((url) => {
                // await getImageURL(url)
                // console.log(url)
                //setUploadPhoto(url)
                inputToAPI(url)
            }).catch((e) => console.log('getting downloadURL of image error => ', e))
            // .finally(() => {
            //     inputToAPI()
            // })
        }, 1000)

    }

    const inputToAPI = async (url) => {
        console.log(url)
        console.log('masuk handle masukkkkk database')
        let logbook = {
            catatan: text,
            foto_catatan_penggunaan: url,
            id_order: route.item.id
        }
        return await fetch(
            'http://192.168.43.140:8000/sirius_api/logbook/',
            {
                method: 'post',
                body: JSON.stringify(logbook),
                headers: {
                    'Content-Type': 'application/json',
                },
            }

        ).then(response => response.json())
            // .then(response => console.log(response))
            .then((json) => console.log(json))
            .catch(error => console.log(error))
            .finally(() => {

                navigation.navigate("MainContainer", {})
            })
    }

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Catatan Alat
                    </Text>
                </View>

                <View style={styles.enter30} />
                <Image source={{ uri: route.item.gambar_alat }} style={styles.listImage} />
                <View style={styles.enter20} />
                <Text style={styles.textDetail}>{route.item.nama_alat}</Text>
                <View style={styles.enter20} />
                <Text style={styles.textsub}>
                    {route.item.alasan_meminjam}
                </Text>

                <View style={styles.enter20} />

                <View style={styles.paragrafView}>
                    <TextInput

                        onChangeText={onChangeText}
                        placeholder="Catatan alat"
                        value={text}
                        multiline
                        editable
                        maxLength={150}
                    />
                </View>
                <View style={styles.enter20} />

                <View style={styles.imagesPushView}>

                    <TouchableOpacity style={styles.imageTouch} onPress={() => {
                        openGalery()
                    }}>
                        <Text style={styles.imagesText}>Pilih Gambar</Text>
                    </TouchableOpacity>
                    <Text style={styles.imagesInputan}>{imagePicker !== null ? imagePicker : 'Pilih foto'}</Text>

                </View>

                <View style={styles.enter20} />
                <TouchableOpacity style={styles.botton} onPress={() => {
                    uploadPhoto()

                }}>
                    <Text style={styles.textBarcount}>Simpan</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

}

export default CatatanAlat;