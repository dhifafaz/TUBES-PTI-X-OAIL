import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Linking,
    StyleSheet,
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getCaounter } from '../../redux/action';

const ScenePegembalian = () => {

    const route = useRoute().params

    const navigation = useNavigation();

    const { orderLog, ip, counter } = useSelector(state => state.userReducer);

    const dispatch = useDispatch()

    const [text, onChangeText] = React.useState("");
    const [idAlat, setIdAlat] = useState(null)

    const [cheking, setCheking] = useState('Letakkan Barcode Dalam Bingkai')

    const onSuccess = (e) => {

        let object = e.data
        let temporary = JSON.parse(object)
        console.log(temporary['id_alat'])

        console.log(route.item.id_alat)

        if (temporary['id_alat'] == route.item.id_alat) {
            setCheking(temporary['nama_alat'])
            setIdAlat(temporary['id_alat'])
        } else {
            setCheking('Alat Yang di Cari SALAH')
        }



    };
    const inputToAPI = async () => {
        let updateStatus = {
            status_alat: "tersedia"
        }
        console.log('masuk1')

        await fetch(
            'http://192.168.42.219:8000/sirius_api/update_status_alat/' + idAlat + '/',
            {
                method: 'patch',
                body: JSON.stringify(updateStatus),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .finally(() => {
                console.log('masuk3')
                dispatch(getCaounter(counter + 1))
                console.log('masuk4')
                navigation.goBack()
            })
    }

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Scan Alat
                    </Text>
                </View>
                <View style={styles.enter30} />


                <View style={styles.scenView}>
                    <View style={styles.scaneBar}>
                        <QRCodeScanner
                            onRead={onSuccess}

                            flashMode={RNCamera.Constants.FlashMode.torch}
                            containerStyle={{ height: 30 }}
                            cameraContainerStyle={{ height: 20 }}
                            cameraStyle={{ height: 20 }}
                            buttonPositive='ok'
                            cameraContainerStyle={{ borderRadius: 10 }}
                        />
                    </View>
                    <View style={styles.enter10} />

                    <Text style={styles.sceneText}>
                        {cheking}
                    </Text>
                </View>
                <View style={styles.enter30} />

                <Text style={styles.textmainL}>
                    {route.item.nama_alat}
                </Text>

                <View style={styles.enter10} />

                <Text style={styles.textmainL}>
                    {route.item.id_alat}
                </Text>
                <View style={styles.enter10} />
                <View style={styles.paragrafView}>
                    <TextInput

                        onChangeText={onChangeText}
                        placeholder="Catatan Kelengkapan Alat ...."
                        value={text}
                        multiline
                        editable
                        maxLength={150}
                    />
                </View>
                <View style={styles.enter20} />
                <TouchableOpacity style={styles.botton} onPress={() => {
                    if (idAlat == route.item.id_alat) {
                        inputToAPI()
                    }
                }}>
                    <Text style={styles.textBarcount}>Pinjam</Text>
                </TouchableOpacity>


            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    color: {
        backgroundColor: '#151D3B',
        flex: 1,
    },
    margin: {
        margin: 20,
    },
    textKatalog: {
        fontSize: 24,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
    },
    row: {
        //paddingRight: 10,
        flexDirection: "row",
    },
    enter40: {
        height: 40,
    },
    enter30: {
        height: 30,
    },
    enter20: {
        height: 20,
    },
    enter10: {
        height: 10,
    },
    scenView: {
        width: '100%',
        //height: 310,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scaneBar: {
        height: 270,
        width: 270,
        borderRadius: 10,
        backgroundColor: 'red',
        overflow: 'hidden',
    },
    sceneText: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
    },

    textmainL: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
    },
    paragrafView: {
        height: 200,
        width: '100%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        padding: 10,
    },
    botton: {
        height: 40,
        backgroundColor: '#4B8BD4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textBarcount: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC'
        //color: '',
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }

})

export default ScenePegembalian;