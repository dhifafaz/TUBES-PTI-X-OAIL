import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
} from 'react-native';
import styles from '../style/homeStyle';
import ProfilBar from '../component/profilBar/profilBar';
import SearchingBar from '../component/searchingBar/searchingBar';
import { Image, Icon } from 'react-native-elements';
import { getCounter, getDataKatalog, getTotal, getLoading } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AppLoader from '../component/loading/apploader';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
let temporaty = []

const HomePage = ({ navigation }) => {
    const { dataKatalog, totalCounter, ip, isloading } = useSelector(state => state.userReducer);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);


    const toTotalPinjaman = () => {
        if (totalCounter >= 1) {
            navigation.navigate('PinjamTotal', {
                counter: temporaty
            })
        }
        else { }


    }

    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(getDataKatalog())
        console.log(ip)
    }, [])


    return (

        <>
            <SafeAreaView style={styles.color}>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <View style={styles.margin}>
                        <View style={styles.katalog}>
                            <Text style={styles.textKatalog}>Katalog</Text>
                        </View>
                        <View style={styles.enter40} />

                        <ProfilBar />
                        <View style={styles.enter30} />
                        <View style={styles.viewEnd}>
                            <TouchableOpacity style={styles.viewBarCount} onPress={toTotalPinjaman}>

                                <Text style={styles.Viewcountertext}>Total Pinjam</Text>

                                <View style={styles.viewBarColorcount}>
                                    <Text style={styles.textBarcount}>{totalCounter}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.enter20} />


                        <SearchingBar />
                        <View style={styles.enter30} />

                        <FlatList

                            data={dataKatalog['data_alat']}
                            renderItem={({ item, index, separators }) => {

                                return (
                                    <Katalog items={item} indexs={index} />
                                )
                            }
                            }
                            keyExtractor={item => item.id_alat}

                        />

                    </View>
                </ScrollView>
            </SafeAreaView>
            {isloading ? <AppLoader /> : null}
        </>

    )
}

const Katalog = (props) => {
    const navigation = useNavigation();

    const { dataKatalog, counter, totalCounter, ip } = useSelector(state => state.userReducer);

    const [hitung, setHitung] = useState(0)

    const dispatch = useDispatch()


    const item = props.items
    const index = props.indexs
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
                            onPress={() => {
                                navigation.navigate('DetailPage', {
                                    index: index
                                })
                            }}
                        >Detail alat...</Text>
                    </View>
                </View>

                <View style={styles.listButtonall}>
                    <View style={styles.listButton}>
                        <View style={styles.listButtonLeft}>
                            <Icon
                                name='remove'
                                color='white'
                                size={15}
                                onPress={() => {


                                    console.log('kurang')

                                    if (hitung <= 0) {
                                        setHitung(0)
                                    } else {
                                        setHitung(hitung - 1)
                                        dispatch(getTotal(totalCounter - 1))
                                        temporaty[index] = hitung - 1
                                        console.log(temporaty[index])
                                        console.log(temporaty)
                                    }


                                }} />

                        </View>

                        <Text style={styles.textBarcounter}>{hitung}</Text>

                        <View style={styles.listButtonRight}>
                            <Icon
                                name='add'
                                color='white'
                                size={15}
                                onPress={() => {

                                    console.log('tambah')

                                    if (hitung >= parseInt(dataKatalog["ketersediaan_alat"][index]['jumlah_alat_tersedia'])) {
                                        setHitung(parseInt(dataKatalog["ketersediaan_alat"][index]['jumlah_alat_tersedia']))

                                    } else {
                                        setHitung(hitung + 1)
                                        dispatch(getTotal(totalCounter + 1))
                                        temporaty[index] = hitung + 1
                                        console.log(temporaty[index])
                                        console.log(temporaty)
                                    }


                                }} />
                        </View>

                    </View>
                </View>

            </View>
            <View style={styles.enter20} />
        </View>
    )
}

export default HomePage;