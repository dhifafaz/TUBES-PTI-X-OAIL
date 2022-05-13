import React, { useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import styles from '../style/pinjamanStyle';
import ProfilBar from '../component/profilBar/profilBar';
import { Image, Icon } from 'react-native-elements';
import Ditolak from '../component/ditolak/ditolak';
import Acc from '../component/acc/acc';
import Proses from '../component/proses/proses';
import { getDataOrderLog, getPinjamAlat, getLoading } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import AppLoader from '../component/loading/apploader';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

let status = []
let idUser = []

const PinjamanPage = () => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        dispatch(getDataOrderLog())
        dispatch(getPinjamAlat())
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const { dataOrderLog, isloading, pinjamAlat, userBanget, ip } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()
    const [check, setCheck] = useState(0)
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(getDataOrderLog())
        dispatch(getPinjamAlat())
    }, [])
    const [isProses, setProses] = useState(false)

    const toCatatan = () => {
        navigation.navigate('CatatanAlat', {})
    }



    console.log(pinjamAlat.id_alat)

    // const fixinputTOAPI = () => {
    //     dispatch(getLoading(true))
    //     inputToAPI()
    // }
    //console.log(check)

    const inputToAPI = async () => {
        dispatch(getLoading(true))
        for (let i = 0; i < status.length; i++) {
            console.log(i)
            if (status[i] == 'terima') {
                let ubah = {
                    status_order: 'meminta-pengambilan'
                }
                await fetch(
                    'http://192.168.42.219:8000/sirius_api/order_log/' + idUser[i] + '/',
                    {
                        method: 'patch',
                        body: JSON.stringify(ubah),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                ).then(response => response.json())
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            } else if (status[i] == 'tolak') {
                let ubah = {
                    status_order: 'telah-ditolak'
                }
                await fetch(
                    'http://192.168.42.219:8000/sirius_api/order_log/' + idUser[i] + '/',
                    {
                        method: 'patch',
                        body: JSON.stringify(ubah),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                ).then(response => response.json())
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            }
            if (i >= status.length - 1) {
                console.log('masuk')
                dispatch(getLoading(false))
                dispatch(getDataOrderLog())
                dispatch(getPinjamAlat())

            }
        }
    }

    return (
        <>
            <SafeAreaView style={styles.color}>
                <ScrollView
                    //style={{ height: 100 }}
                    //contentContainerStyle={{ height: 0 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <View style={styles.margin}>
                        <Text style={styles.textKatalog}>Pinjaman</Text>
                        <View style={styles.enter40} />
                        <ProfilBar />
                        <View style={styles.enter30} />

                        {
                            isProses ? <Ambil input={inputToAPI} /> : null
                        }

                        <FlatList
                            data={dataOrderLog}
                            renderItem={({ item, index, separators }) => {
                                if (item.id_user === userBanget.id) {

                                    if (item.status_order === 'terima' || item.status_order === 'tolak') {
                                        if (item.status_order === 'terima') {
                                            setProses(true)

                                        }
                                        status[index] = item.status_order
                                        idUser[index] = item.id
                                        setCheck(1)
                                        return (
                                            <View>
                                                <View style={styles.listView}>

                                                    <Image source={{ uri: item.gambar_alat }} style={styles.listImage} />
                                                    <View style={styles.listboxtext}>
                                                        <View>
                                                            <Text style={styles.listTextTitle}>{item.nama_alat}</Text>
                                                            <Text style={styles.listTextsub}>Jumlah : 1</Text>
                                                        </View>
                                                    </View>
                                                    {
                                                        item.status_order === 'terima' ? <Acc /> : <Ditolak />
                                                    }
                                                </View>
                                                <View style={styles.enter20} />
                                            </View>
                                        )
                                    } else if (item.status_order === 'digunakan') {
                                        setCheck(1)
                                        return (
                                            <View>
                                                <View style={styles.listView}>

                                                    <Image source={{ uri: item.gambar_alat }} style={styles.listImage} />
                                                    <View style={styles.listboxtext}>
                                                        <View>
                                                            <Text style={styles.listTextTitle}>{item.nama_alat}</Text>
                                                            <Text style={styles.listTextsub}>Jumlah : 1</Text>
                                                            <TouchableOpacity style={styles.botton} onPress={
                                                                () => navigation.navigate('CatatanAlat', {
                                                                    item: item
                                                                })
                                                            }>
                                                                <Text style={styles.textBarcount}>Catatan</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>

                                                    <Acc />
                                                </View>
                                                <View style={styles.enter20} />
                                            </View>
                                        )
                                    }
                                }
                            }}
                            keyExtractor={item => item.id}
                        />

                        <FlatList
                            data={dataOrderLog}
                            renderItem={({ item, index, separators }) => {
                                if (item.id_user === userBanget.id) {

                                    if (item.status_order === 'proses') {
                                        setCheck(1)
                                        return (
                                            <View>
                                                <View style={styles.listView}>

                                                    <Image source={{ uri: item.gambar_alat }} style={styles.listImage} />
                                                    <View style={styles.listboxtext}>
                                                        <View>
                                                            <Text style={styles.listTextTitle}>{item.nama_alat}</Text>
                                                            <Text style={styles.listTextsub}>Jumlah : 1</Text>
                                                        </View>
                                                    </View>
                                                    <Proses />
                                                </View>
                                                <View style={styles.enter20} />

                                            </View>
                                        )
                                    }

                                }
                            }}
                            keyExtractor={item => item.id}
                        />
                        <View style={styles.enter40} />
                        <View style={styles.enter20} />
                        {
                            check == 0 ? <TidakAda /> : null
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
            {isloading ? <AppLoader /> : null}
        </>
    )

}

const Ambil = (props) => {

    return (
        <View>
            <View style={styles.ambilView}>
                <TouchableOpacity style={styles.ambilTouch} onPress={props.input}>
                    <Text style={styles.ambilText}>Ambil</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.enter40} />
        </View>
    )
}

const ProsesAmbil = () => {
    return (
        <View>

            <View style={styles.listView}>

                <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                <View style={styles.listboxtext}>
                    <View>
                        <Text style={styles.listTextTitle}>Teleskop Mahal Oail</Text>
                        <Text style={styles.listTextsub}>Jumlah : 1</Text>
                    </View>
                </View>
                <Proses />
            </View>

        </View>
    )
}

const SudahAmbil = () => {

    const navigation = useNavigation();

    const toCatatan = () => {
        navigation.navigate('CatatanAlat', {})
    }

    return (
        <View>
            <View style={styles.listView}>

                <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                <View style={styles.listboxtext}>
                    <View>
                        <Text style={styles.listTextTitle}>Teleskop Mahal Oail</Text>
                        <Text style={styles.listTextsub}>Jumlah : 1</Text>
                        <TouchableOpacity style={styles.botton} onPress={toCatatan}>
                            <Text style={styles.textBarcount}>Catatan</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Acc />
            </View>
        </View>
    )
}
const TidakAda = () => {
    return (
        <View style={styles.tidakAda}>
            <Image source={require('../assets/images/nonpinjaman.png')} style={styles.zonktImage} />
        </View>
    )
}

export default PinjamanPage;