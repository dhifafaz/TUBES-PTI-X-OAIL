import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Pressable,
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import styles from './detailPengembalianStyle';
import ScanButton from '../../component/scanButton/scanButton'
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderLog, getCaounter } from '../../redux/action';
import { getCounter } from '../../redux/action';
import { useNavigation } from '@react-navigation/native';

let idUser = []
let status = []



const DetailPengembalian = () => {

    const { orderLog, ip, counter } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    const navigation = useNavigation();

    const route = useRoute().params

    useEffect(() => {
        dispatch(getOrderLog(route.item.token_order, route.item.id_user))
        console.log(ip)
    }, [])

    const inputToAPI = async () => {
        let statusUpdate = {
            status_order: 'sudah-dikembalikan'
        }
        console.log('ini total yak : ' + idUser.length)
        for (let i = 0; i < idUser.length; i++) {
            console.log(i)
            console.log(status[i])
            if (status[i] == "meminta-pengembalian") {
                await fetch(
                    'http://192.168.43.140:8000/sirius_api/order_log/' + idUser[i] + '/',
                    {
                        method: 'patch',
                        body: JSON.stringify(statusUpdate),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                ).then(response => response.json())
                    .then(response => console.log(response))
                    .catch(error => console.log(error))

            }
            if (i >= idUser.length - 1) {
                //dispatch(getCounter(0))
                navigation.goBack()
            }



        }
    }

    console.log('testingggggg2222222222')
    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Detail Pengembalian
                    </Text>
                </View>
                <View style={styles.profileBar}>
                    <Image source={{ uri: route.item.profile_pic }} style={styles.image} />
                    <View style={styles.profileDetail}>
                        <Text style={styles.textDetail}>{route.item.nama_user}</Text>
                        <Text style={styles.textsub}>{route.item.role}</Text>
                        <Text style={styles.textsub}>Bandar Lampung</Text>
                        <Text style={styles.textsub}>0978891234678</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTittle}>Alasan Peminjaman</Text>
                    <Text style={styles.textsub}>{route.item.alasan_meminjam}</Text>
                </View>
                <FlatList
                    data={orderLog}
                    renderItem={({ item, index, separators }) => {
                        if (item.status_order == "meminta-pengembalian") {
                            idUser[index] = item.id
                            status[index] = item.status_order
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
                                                <Pressable style={styles.listBotton} onPress={() => {
                                                    navigation.navigate('ScenePegembalian', {
                                                        item: item,
                                                        index: index
                                                    })
                                                }}>
                                                    <Text style={styles.listTextBotton}>Scan</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }

                    }}
                />
                <View>
                    <Pressable style={styles.button} onPress={() => {
                        inputToAPI()
                    }}>
                        <Text style={styles.buttonText}>Kirim</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailPengembalian;