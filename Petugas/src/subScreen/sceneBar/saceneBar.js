import React from 'react';
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

const ScenePage = ({ navigation }) => {
    const [text, onChangeText] = React.useState("");

    const onSuccess = (e) => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
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
                        Letakkan Barcode Dalam Bingkai
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