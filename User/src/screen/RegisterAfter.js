import React, { useEffect, useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';
import styles from '../style/LoginPageStyles';
import { Image, } from 'react-native-elements';
import { launchImageLibrary } from 'react-native-image-picker';
import { useRoute } from '@react-navigation/native';
import storage, { firebase } from '@react-native-firebase/storage';


const RegisterAfter = ({ navigation }) => {



    const route = useRoute().params

    const [imagePicker, setImagePicker] = useState(null);
    const [imagePicker2, setImagePicker2] = useState(null);

    const [readyUploadKTP, setUploadKTP] = useState(null);
    const [readyUploadPhoto, setUploadPhoto] = useState(null);

    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const [filenameKTP, setFileNameKTP] = useState(null);
    const [filenamePicture, setFileNamePicture] = useState(null);


    const [text, setText] = useState({
        profile_pic: readyUploadPhoto,

        profiles: {

            KTP_KTM: readyUploadKTP,

        }
    })

    // const [imagetag, setImagetag] = useState({
    //     profile_pic: imagePicker2,
    //     profiles: {
    //         KTP_KTM: imagePicker,
    //     }
    // })

    useEffect(() => {

        async function fetchMyAPI() {
            if (text.profile_pic != null && text.profiles['KTP_KTM'] != null) {
                console.log('masuk handle masukkkkk database')
                let ipMasuk = ('http://192.168.43.140:8000/sirius_api/register_user/40/').toLowerCase()
                //let ipMasuk = ('https://sirius-oail.loca.lt/sirius_api/register_user/10/')
                console.log(ipMasuk)
                return await fetch(
                    ipMasuk,
                    {
                        method: 'patch',
                        body: JSON.stringify(text),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }

                ).then(response => response.json())
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            }
        }
        fetchMyAPI()



    })

    const option = {
        title: 'Pilih KTP',
        type: 'library',
        option: {
            selectionLimit: 1,
            mediaType: 'photo',
        }
    }

    const openGalery = async () => {
        const imagesKTP = await launchImageLibrary(option);
        if (imagesKTP.didCancel) {
            console.log('cancel Image')
        } else if (imagesKTP.errorCode) {
            console.log(imagesKTP.errorMessage)
        } else {
            const source = { uri: imagesKTP.assets[0].uri }
            setImagePicker(source)
            console.log(source)
            console.log(imagesKTP.assets[0].fileName)
        }

    }

    const openGalery2 = async () => {
        const imagesPic = await launchImageLibrary(option);
        if (imagesPic.didCancel) {
            console.log('cancel Image')
        } else if (imagesPic.errorCode) {
            console.log(imagesPic.errorMessage)
        } else {
            const source = { uri: imagesPic.assets[0].uri }
            setImagePicker2(source)
            console.log(source)
            console.log(imagesPic.assets[0].fileName)
        }


    }

    const uploadPhoto = async () => {
        const { uri } = imagePicker2
        const fileName = uri.substring(uri.lastIndexOf('/') + 1);
        //setFileNamePicture(fileName)
        console.log(fileName)
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

        setTransferred(0);

        const task = storage().ref('/profile_picture/' + fileName).putFile(uploadUri)

        task.on('state_changed', snapshot => {
            setTransferred(
                Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
            );
        });

        try {
            await task
        } catch (e) {
            console.error(e);
        }

        setTimeout(() => {
            let imageProfileRef = firebase.storage().ref('/profile_picture/' + fileName)
            imageProfileRef.getDownloadURL().then((url) => {
                setText(text => ({
                    ...text, profile_pic: url
                }));
                console.log('ini FOTO JANCUK')
                //setUploadPhoto(url)
            }).catch((e) => console.log('getting downloadURL of image error => ', e))
        }, 1000)


    }

    const uploadKTP = async () => {
        const { uri } = imagePicker
        const fileName = uri.substring(uri.lastIndexOf('/') + 1);
        //setFileNameKTP(fileName)
        console.log(fileName)
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

        setTransferred(0);

        const task = storage().ref('/ktp_ktm/' + fileName).putFile(uploadUri)

        task.on('state_changed', snapshot => {
            setTransferred(
                Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
            );
        });

        try {
            await task
        } catch (e) {
            console.error(e);
        }

        setTimeout(() => {
            let imageKTPRef = firebase.storage().ref('/ktp_ktm/' + fileName)
            imageKTPRef.getDownloadURL().then((url) => {
                setText(text => ({
                    ...text,
                    profiles: {
                        ...text.profiles, KTP_KTM: url
                    }
                }));
                console.log('ini KTP jancuk')
                //setUploadKTP(url)
            }).catch((e) => console.log('getting downloadURL of image error => ', e))
        }, 2000)

    }

    // const handleFilePic = () => {
    //     let imageProfileRef = firebase.storage().ref('/profile_picture/' + filenamePicture)
    //     imageProfileRef.getDownloadURL().then((url) => {
    //         setUploadPhoto(url)
    //     }).catch((e) => console.log('getting downloadURL of image error => ', e))

    //     let imageKTPRef = firebase.storage().ref('/ktp_ktm/' + filenameKTP)
    //     imageKTPRef.getDownloadURL().then((url) => {
    //         setUploadKTP(url)
    //     }).catch((e) => console.log('getting downloadURL of image error => ', e))


    //     if (readyUploadKTP != null && readyUploadPhoto != null) {
    //         console.log(readyUploadKTP)
    //         setText(text => ({
    //             ...text,
    //             profiles: {
    //                 ...text.profiles, KTP_KTM: readyUploadKTP
    //             }
    //         }));
    //         console.log(text)
    //         console.log(readyUploadPhoto)
    //         setText(text => ({
    //             ...text, profile_pic: readyUploadPhoto
    //         }));
    //     }
    // }

    const insertData = () => {



        uploadKTP()
        uploadPhoto()
        // if (readyUploadKTP != null && readyUploadPhoto != null) {
        //     console.log('masuk handle masukkkkk database')
        //     let ipMasuk = ('http://192.168.43.140:8000/sirius_api/register_user/40/').toLowerCase()
        //     //let ipMasuk = ('https://sirius-oail.loca.lt/sirius_api/register_user/10/')
        //     console.log(ipMasuk)
        //     return fetch(
        //         ipMasuk,
        //         {
        //             method: 'patch',
        //             body: JSON.stringify(text),
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //         }

        //     ).then(response => response.json())
        //         .then(response => console.log(response))
        //         .catch(error => console.log(error))
        // }
    }


    console.log(text);


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

                    <View style={styles.inputArea1}>
                        <TouchableOpacity style={styles.touch} onPress={openGalery}>
                            <Text style={styles.textPic}>Pilih</Text>
                        </TouchableOpacity>
                        <Text style={styles.textdest}>{imagePicker != null ? imagePicker['uri'].substring(imagePicker['uri'].lastIndexOf('/') + 1) : 'KTP/KTM'}</Text>
                    </View>

                    <View style={styles.inputArea1} >
                        <TouchableOpacity style={styles.touch} onPress={openGalery2}>
                            <Text style={styles.textPic}>Pilih</Text>

                        </TouchableOpacity>
                        <Text style={styles.textdest}>{imagePicker2 != null ? imagePicker2['uri'].substring(imagePicker2['uri'].lastIndexOf('/') + 1) : 'Pas Foto'}</Text>
                    </View>

                </View>

                <TouchableOpacity
                    style={styles.masukButton}
                    //onPress={insertData}
                    onPress={insertData}
                >
                    <Text style={styles.buttonText1}>Daftar</Text>
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
    )
}
export default RegisterAfter