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
import styles from './detailPeminjamanStyle';
import TheButton from '../../component/terimaTolakButton/terimaTolakButton';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderLog } from '../../redux/action';
import { useRoute } from '@react-navigation/native';

const DetailPeminjaman = ({ navigation }) => {

    const { orderLog, ip } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    const route = useRoute().params



    useEffect(() => {
        dispatch(getOrderLog())
        console.log(ip)
    }, [])

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
                <View style={styles.card}>
                    <Text style={styles.textTittle}>Alat Yang Dipinjam</Text>
                    <View style={styles.cardAlat}>
                        <Image source={require('../../assets/images/pixel_google.jpg')} style={styles.image2} />

                        <View style={styles.boxText}>
                            <Text style={styles.textBoxTittle}>Teleskop Mahal Oail</Text>
                            <Text style={styles.textBox}>Jumlah : 1</Text>
                        </View>
                        <View style={styles.theButton}>
                            <TheButton />
                        </View>
                    </View>
                </View>
                <View>
                    <Pressable style={styles.button} onPress={() => {
                        console.log('KIRIM');
                    }}>
                        <Text style={styles.buttonText}>Kirim</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailPeminjaman;