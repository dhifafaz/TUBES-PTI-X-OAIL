import React, { useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import styles from '../style/pinjamanStyle';
import ProfilBar from '../component/profilBar/profilBar';
import { Image, Icon } from 'react-native-elements';
import Ditolak from '../component/ditolak/ditolak';
import Acc from '../component/acc/acc';
import Proses from '../component/proses/proses';
import { getDataOrderLog, getPinjamAlat } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

let check = 0

const PinjamanPage = () => {

    const { dataOrderLog, data_user, pinjamAlat, userBanget } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataOrderLog())
        dispatch(getPinjamAlat())
    }, [])


    let itemlist = []
    //itemlist[3] = { 'we': 'ew' }
    //console.log(typeof itemlist[3])

    console.log(pinjamAlat.id_alat)

    return (
        <SafeAreaView style={styles.color}>
            <View style={styles.margin}>
                <Text style={styles.textKatalog}>Pinjaman</Text>
                <View style={styles.enter40} />
                <ProfilBar />
                <View style={styles.enter30} />

                <FlatList
                    data={dataOrderLog}
                    renderItem={({ item, index, separators }) => {
                        if (item.id_user === null) {
                            if (typeof itemlist[index] !== 'object') {
                                dispatch(getPinjamAlat(item.id_alat))
                                //console.log(pinjamAlat.id_alat)
                                itemlist[index] = pinjamAlat
                                console.log(itemlist[index])
                            }

                            check += 1
                            return (
                                <View>

                                    <View style={styles.listView}>

                                        <Image source={{ uri: itemlist[index].gambar_alat }} style={styles.listImage} />
                                        <View style={styles.listboxtext}>
                                            <View>
                                                <Text style={styles.listTextTitle}>{itemlist[index].nama_alat}</Text>
                                                <Text style={styles.listTextsub}>Jumlah : 1</Text>
                                            </View>
                                        </View>
                                        <Proses />
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
            </View>

        </SafeAreaView>
    )

}

const Ambil = () => {
    return (
        <View>
            <View style={styles.ambilView}>
                <TouchableOpacity style={styles.ambilTouch}>
                    <Text style={styles.ambilText}>Ambil</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.enter30} />
            <View style={styles.listView}>

                <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                <View style={styles.listboxtext}>
                    <View>
                        <Text style={styles.listTextTitle}>Teleskop Mahal Oail</Text>
                        <Text style={styles.listTextsub}>Jumlah : 1</Text>

                    </View>
                </View>

                <Ditolak />
            </View>
            <View style={styles.enter20} />

            <View style={styles.listView}>

                <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                <View style={styles.listboxtext}>
                    <View>
                        <Text style={styles.listTextTitle}>Teleskop Mahal Oail</Text>
                        <Text style={styles.listTextsub}>Jumlah : 1</Text>

                    </View>
                </View>

                <Acc />
            </View>
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