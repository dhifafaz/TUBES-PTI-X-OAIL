import React, { useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import styles from './detailRiwayatStyle';
import { getDataKatalog, getRiwayat } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { getOrderLog, getCaounter } from '../../redux/action';
import { getCounter } from '../../redux/action';
import { useNavigation } from '@react-navigation/native';

const DetailRiwayatPage = ({ navigation }) => {

    const route = useRoute().params

    const dispatch = useDispatch()
    console.log(route.item.token_order)
    console.log(route.item.id_user)

    useEffect(() => {
        dispatch(getOrderLog(route.item.token_order, route.item.id_user))
        console.log(ip)
    }, [])

    const { orderLog, ip, counter } = useSelector(state => state.userReducer);

    console.log(orderLog)

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Detail Riwayat
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

                <Text style={styles.textTittle}>Alat Yang Dipinjam</Text>

                <FlatList
                    data={orderLog}
                    renderItem={({ item, index, separators }) => {
                        if (item.status_order == "sudah-dikembalikan") {
                            return (
                                <View>

                                    <View style={styles.card}>

                                        <View style={styles.cardAlat}>
                                            <Image source={{ uri: item.gambar_alat }} style={styles.image2} />

                                            <View style={styles.boxText}>
                                                <Text style={styles.textBoxTittle}>{item.nama_alat}</Text>
                                                <Text style={styles.textBox}>Jumlah : 1</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            )

                        }
                    }}
                    keyExtractor={item => item.id_alat}
                />
                {/* <View style={styles.card}>

                    <View style={styles.cardAlat}>
                        <Image source={require('../../assets/images/pixel_google.jpg')} style={styles.image2} />

                        <View style={styles.boxText}>
                            <Text style={styles.textBoxTittle}>Teleskop Mahal Oail</Text>
                            <Text style={styles.textBox}>Jumlah : 1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTittle}>Catatan</Text>
                    <View style={styles.subCard}>
                        <Text style={styles.textBox}>Alat ini berfungsi sangat baik, saya menggunkana nya di gedung A itera untuk meneropong pintang cang cantik, akan tetapi di bagian lensa saya ketumpahan makanan saya yang lezat dan bergizi. saya tidak tau kenapa cuma saat saya melihat bintang lagi, gambar yang saya lihat sangat buram, mungkin ketumpahan makanan saya yang lezat dan bergizi itu...</Text>
                    </View>
                    <View style={styles.subCard}>
                        <Image source={require('../../assets/images/catatanPhoto.png')} style={styles.imageCatatan} />
                    </View>
                </View> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailRiwayatPage;