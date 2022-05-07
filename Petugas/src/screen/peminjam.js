import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import styles from '../style/peminjamStyle';
import SearchingBar from '../component/searchingBar/searchingBar';
import ProfilBar from '../component/profilBar/profilBar';
import PeminjamanButton from '../component/peminjamanButton/peminjamanButton';
import PengembalianButton from '../component/pengembalianButton/pengembalian';
import PengambilanButton from '../component/pengambilanButton/pengambilan';
import DigunakanButton from '../component/digunakanButton/digunakan';
import { getDaftarPeminjam } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const PeminjamanPage = ({ navigation }) => {

    const { daftarPeminjman, ip } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDaftarPeminjam())
        console.log(ip)
    }, [])

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View >
                    <View style={styles.katalog}>
                        <Text style={styles.textKatalog}>Daftar Peminjaman</Text>
                    </View>

                    <View style={styles.enter40} />

                    <ProfilBar />
                    <View style={styles.enter30} />

                    <SearchingBar />
                    <View style={styles.enter30} />


                    <FlatList
                        data={daftarPeminjman["data_peminjam"]}
                        renderItem={({ item, index, separators }) => {

                            if (item.status_order === 'proses' || item.status_order === 'meminta-pengambilan' || item.status_order === 'meminta-pengembalian' || item.status_order === 'digunakan') {
                                return (
                                    <View>
                                        <View style={styles.listView}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={{ uri: item.profile_pic }} style={styles.listImage} />
                                                <View style={styles.listViewText}>
                                                    <Text style={styles.listText}>{item.nama_user}</Text>
                                                    <Text style={styles.listText}>{item.token_order}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.listViewText}>
                                                {
                                                    item.status_order === 'proses' ? <PeminjamanButton items={item} tokens={item.token_order} /> : null
                                                }
                                                {
                                                    item.status_order === 'meminta-pengambilan' ? <PengambilanButton items={item} tokens={item.token_order} /> : null
                                                }
                                                {
                                                    item.status_order === 'meminta-pengembalian' ? <PengembalianButton /> : null
                                                }
                                                {
                                                    item.status_order === 'digunakan' ? <DigunakanButton /> : null
                                                }

                                            </View>
                                        </View>
                                        <View style={styles.enter20} />
                                    </View>
                                )
                            }

                        }
                        }
                        keyExtractor={item => item.token_order}
                    />
                    <View style={styles.enter20} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PeminjamanPage;