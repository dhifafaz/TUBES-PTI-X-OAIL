import React, { useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,

} from 'react-native';
import styles from '../style/katalogStyle';
import ProfilBar from '../component/profilBar/profilBar';
import SearchingBar from '../component/searchingBar/searchingBar';
import { Image, Icon } from 'react-native-elements';
import { getDataKatalog } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const KatalogPage = ({ navigation }) => {
    const { dataKatalog, ip } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataKatalog())
        console.log(ip)
    }, [])

    console.log(dataKatalog)


    return (
        <SafeAreaView style={styles.color}>
            <View style={styles.margin}>
                <View style={styles.katalog}>
                    <Text style={styles.textKatalog}>Katalog</Text>
                </View>
                <View style={styles.enter40} />

                <ProfilBar />
                <View style={styles.enter30} />

                <SearchingBar />
                <View style={styles.enter30} />
                <FlatList
                    data={dataKatalog['data_alat']}
                    renderItem={({ item, index, separators }) => {
                        let Ipgambar = ip + item.gambar_alat;
                        return (
                            <View>
                                <View style={styles.listView}>

                                    <Image source={{ uri: Ipgambar }} style={styles.listImage} />
                                    <View style={styles.listboxtext}>
                                        <View>
                                            <Text style={styles.listTextTitle}>{item.nama_alat}</Text>
                                            <Text style={styles.listTextsub}>Stok : {dataKatalog["ketersediaan_alat"][index]['jumlah_alat_tersedia']}</Text>
                                            <Text
                                                style={styles.listTextsub}
                                                onPress={
                                                    () => {
                                                        navigation.navigate('DetailPage', {
                                                            index: index
                                                        })
                                                    }}
                                            >Detail alat...</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.enter20} />
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id_alat}
                />


            </View>
        </SafeAreaView>
    )
}

export default KatalogPage;