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
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import styles from './sceneBarStyle';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderLog } from '../../redux/action';

const ScenePage = () => {

    const route = useRoute().params

    const navigation = useNavigation();

    const { orderLog, ip } = useSelector(state => state.userReducer);

    const dispatch = useDispatch()

    const [text, onChangeText] = React.useState("");

    const [cheking, setCheking] = useState('Letakkan Barcode Dalam Bingkai')

    const onSuccess = (e) => {

        let object = e.data
        let temporary = JSON.parse(object)
        console.log(temporary['id_alat'])
        console.log(route.item.id_alat)

        if (temporary['id_alat'] == route.item.id_alat) {
            setCheking(temporary['nama_alat'])
        } else {
            setCheking('Alat Yang di Cari SALAH')
        }



    };

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
                    Teleskop Mahal OAIL
                </Text>

                <View style={styles.enter10} />

                <Text style={styles.textmainL}>
                    T-012
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
                    console.log('matap');
                }}>
                    <Text style={styles.textBarcount}>Pinjam</Text>
                </TouchableOpacity>


            </ScrollView>
        </SafeAreaView>
    )
}

export default ScenePage;