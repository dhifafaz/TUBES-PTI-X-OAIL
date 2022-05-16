import React, { useEffect, useState} from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Pressable,
    RefreshControl
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import styles from '../style/riwayatStyle';
import ProfilBar from '../component/profilBar/profilBar';
import SearchingBar from '../component/searchingBar/searchingBar';
import { getDataKatalog, getRiwayat } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const RiwayatPage = ({ navigation }) => {

    useEffect(() => {
        dispatch(getRiwayat())
        console.log(ip)
    }, [])

    const { dataKatalog, ip, riwayat } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()
    console.log('hahah')
    console.log(riwayat["data_peminjam"])

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const toDetailRiwayat = () => {
        navigation.navigate('DetailRiwayatPage', {})
    }



    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}
                //contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View >
                    <View style={styles.katalog}>
                        <Text style={styles.textKatalog}>Riwayat Peminjaman</Text>
                    </View>
                    <View style={styles.enter40} />

                    <ProfilBar />
                    <View style={styles.enter30} />

                    <SearchingBar />
                    <View style={styles.enter30} />

                    <FlatList
                        data={riwayat["data_peminjam"]}
                        renderItem={({ item, index, separators }) => {
                            let Ipgambar = ip + item.gambar_alat;
                            return (
                                <View>

                                    <View style={styles.listView}>
                                        <Image source={{ uri: item.profile_pic }} style={styles.listImage} />
                                        <View style={styles.listboxtext}>
                                            <Text style={styles.listTextTitle}>{item.nama_user}</Text>
                                            <Text style={styles.listTextsub}>{item.role}</Text>
                                            <Text style={styles.listTextsub}>{item.prodi_unit_institusi}</Text>
                                            <Text style={styles.listTextsub}>{item.tanggal_pengembalian}</Text>
                                            <Pressable
                                                style={styles.detailButton}
                                                onPress={() => {
                                                    navigation.navigate('DetailRiwayatPage', {
                                                        item: item
                                                    })
                                                }}>
                                                <Text style={styles.textButton}

                                                >Detail Riwayat</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={item => item.id_alat}
                    />


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RiwayatPage;