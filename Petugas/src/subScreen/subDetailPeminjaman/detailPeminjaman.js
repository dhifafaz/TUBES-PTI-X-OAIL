import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Pressable,
    TouchableWithoutFeedback,
    TouchableOpacity,
    KeyboardAvoidingView,
    Modal,
    TextInput,
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import styles from './detailPeminjamanStyle';
//import TheButton from '../../component/terimaTolakButton/terimaTolakButton';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderLog } from '../../redux/action';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

let statusTrimaTolak = []
let alasanTolak = []
let idUser = []

const DetailPeminjaman = () => {
    const navigation = useNavigation();

    const { orderLog, ip } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    const route = useRoute().params



    useEffect(() => {
        dispatch(getOrderLog(route.item.token_order, route.item.id_user))
        console.log(ip)
    }, [])

    console.log(orderLog)
    console.log(route.item.token_order)
    console.log(route.item.id_user)

    const input = async () => {

        for (let i = 0; i < len; i++) {
            console.log('masuk' + i)
            let text = {
                status_order: statusTrimaTolak[i],
                keterangan_ditolak: alasanTolak[i]
            }

            await fetch(
                'http://192.168.43.140:8000/sirius_api/order_log/' + idUser[i] + '/',
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

            if (i >= statusTrimaTolak.length - 1) {
                navigation.navigate('MainContainer', {})
            }

        }
    }

    let keys = Object.keys(orderLog)
    let len = keys.length
    //console.log(len)

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Detail Peminjaman
                    </Text>
                </View>
                <View style={styles.profileBar}>
                    <Image source={{ uri: route.item.profile_pic }} style={styles.image} />
                    <View style={styles.profileDetail}>
                        <Text style={styles.textDetail}>{route.item.nama_user}</Text>
                        <Text style={styles.textsub}>Mahasiswa</Text>
                        <Text style={styles.textsub}>Bandar Lampung</Text>
                        <Text style={styles.textsub}>0978891234678</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTittle}>Alasan Peminjaman</Text>
                    <Text style={styles.textsub}>{route.item.alasan_meminjam}</Text>
                </View>

                <Text style={styles.textTittle}>Alat Yang Dipinjam</Text>

                <FlatList

                    data={orderLog}
                    renderItem={({ item, index, separators }) => {
                        idUser[index] = item.id
                        return (
                            <View>
                                <View style={styles.card}>

                                    <View style={styles.cardAlat}>
                                        <Image source={{ uri: item.gambar_alat }} style={styles.image2} />

                                        <View style={styles.boxText}>
                                            <Text style={styles.textBoxTittle}>{item.nama_alat}</Text>
                                            <Text style={styles.textBox}>Jumlah : 1</Text>
                                        </View>
                                        <View style={styles.theButton}>
                                            <TheButton index={index} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    } keyExtractor={item => item.id}
                />


                <View>
                    <Pressable style={styles.button} onPress={() => {
                        // console.log(idUser);
                        // console.log(alasanTolak);
                        // console.log(statusTrimaTolak)
                        input()
                    }}>
                        <Text style={styles.buttonText}>Kirim</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const TheButton = (props) => {

    let index = props.index

    const [modalVisible, setModalVisible] = useState(false);

    const [text, onChangeText] = useState("Tidak Ditolak");

    const [status, setStatus] = useState();
    const setStatusFilter = status => {
        setStatus(status)
    }

    const terima = () => {
        statusTrimaTolak[index] = 'terima'
        setStatusFilter('Terima')
    }

    const tolak = () => {
        statusTrimaTolak[index] = 'tolak'
        setModalVisible(!modalVisible);
        setStatusFilter('Tolak');
    }

    useEffect(() => {
        alasanTolak[index] = text
    })

    return (
        <>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <KeyboardAvoidingView
                    behavior="position"
                    enable>
                    <TouchableWithoutFeedback
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <View style={styles.modal}>
                            <TextInput
                                style={styles.note}
                                placeholder="Catatan ..."
                                onChangeText={onChangeText}
                                value={text}
                                multiline={true}
                            />
                            <Pressable style={styles.button} onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                                <Text style={styles.buttonText}>Kirim</Text>
                            </Pressable>
                        </View>

                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </Modal>

            <Pressable
                style={[status === 'Terima' ? styles.terimaButton : styles.defaultButton]}
                onPress={() => terima()}>
                <Text style={[status === 'Terima' ? styles.selectedText : styles.textButton]}>Terima</Text>
            </Pressable>
            <Pressable
                style={[status === 'Tolak' ? styles.tolakButton : styles.defaultButton]}
                onPress={() => tolak()}>
                <Text style={[status === 'Tolak' ? styles.selectedText : styles.textButton]}>Tolak</Text>
            </Pressable>
        </>
    )
}

export default DetailPeminjaman;