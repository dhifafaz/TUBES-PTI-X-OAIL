import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../style/pengembalianStyle';
import ProfilBar from '../component/profilBar/profilBar';
import { Image, Icon } from 'react-native-elements';
import { getDataOrderLog, getPinjamAlat } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

let status = []
let idUser = []

const PengembalianPage = ({ navigation }) => {

    const [check, setCheck] = useState(0)

    const { dataOrderLog, data_user, pinjamAlat, userBanget, ip } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataOrderLog())

    }, [])

    const inputToAPI = async () => {
        for (let i = 0; i < status.length; i++) {
            if (status[i] == 'digunakan') {
                let ubah = {
                    status_order: 'meminta-pengembalian'
                }
                await fetch(
                    'http://192.168.43.140:8000/sirius_api/order_log/' + idUser[i] + '/',
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
        }
    }
    console.log(check)

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView>
                <View style={styles.margin}>

                    <Text style={styles.textKatalog}>Pengembalian</Text>
                    <View style={styles.enter40} />
                    <ProfilBar />
                    <View style={styles.enter40} />
                    {
                        check == 1 ?
                            <View style={styles.ambilView}>
                                <TouchableOpacity style={styles.ambilTouch} onPress={() => inputToAPI()}>
                                    <Text style={styles.ambilText}>Kembalikan</Text>
                                </TouchableOpacity>
                            </View> : null
                    }
                    <View style={styles.enter30} />


                    <FlatList
                        data={dataOrderLog}
                        renderItem={({ item, index, separators }) => {
                            if (item.status_order === 'digunakan') {
                                status[index] = item.status_order
                                idUser[index] = item.id
                                console.log('test')
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
                                        </View>
                                        <View style={styles.enter20} />
                                    </View>
                                )
                            }
                        }}
                        keyExtractor={item => item.id}
                    />
                    {
                        check == 0 ? <TidakAda /> : null
                    }

                    <View style={styles.enter40} />
                </View>
            </ScrollView>

        </SafeAreaView>
    )

}

const TidakAda = () => {
    return (
        <View style={styles.tidakAda}>
            <Image source={require('../assets/images/nonpinjaman.png')} style={styles.zonktImage} />
        </View>
    )
}

export default PengembalianPage;