import React, { useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Image, Icon, CheckBox } from 'react-native-elements';
import styles from './pinjamTotalStyle';
import ProfilBar from '../../component/profilBar/profilBar';
import DatePicker from 'react-native-date-picker'
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getLoading } from '../../redux/action';
import AppLoader from '../../component/loading/apploader';
import { useNavigation } from '@react-navigation/native';

const PinjamTotal = () => {

    const navigation = useNavigation();

    const dispatch = useDispatch()
    const route = useRoute().params
    const { dataKatalog, totalCounter, ip, isloading, data_user } = useSelector(state => state.userReducer);
    ///
    const [checkMasuk, setCheckMasuk] = React.useState(false);
    const [check, onChangeCheck] = React.useState(false);

    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)
    const [textDate, setTextDate] = React.useState('Tanggal Pengembalian')

    var today = new Date();
    var tanggal = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = tanggal + ':' + time;

    const [posting, getPosting] = React.useState({
        token_order: Math.floor(Date.now() * Math.random()).toString(),
        tanggal_peminjaman: dateTime,
        tanggal_pengembalian: date,
        status_order: 'Proses',
        alasan_meminjam: '',
        keterangan_ditolak: '',
        catatan_kelengkapan_alat: '',
        //id_alat: idAlat,
        id_user: data_user.id,
    })

    const randomToken = () => {
        return Math.floor(Date.now() * Math.random());
    }
    let temporarty = true

    // setInterval(() => {
    //     setCheckMasuk(isloading)
    // }, 0);

    // useEffect(() => {

    //     if (isloading && temporarty) {
    //         console.log('uda masuk kok ini')
    //         temporarty = false
    //         fetchMyAPI()
    //     }



    // }, [])

    const submit = async () => {
        dispatch(getLoading(true))
        for (let i = 0; i < len; i++) {
            console.log('ini looping ke ' + i)
            if (route.counter[i] >= 1) {
                for (let j = 0; j < route.counter[i]; j++) {
                    //setIdAlat(dataKatalog["data_alat"][i]['id_alat'])
                    //console.log(dataKatalog["data_alat"][i]['id_alat'])
                    let fixposting = {
                        token_order: Math.floor(Date.now() * Math.random()).toString(),
                        tanggal_peminjaman: '2022-04-08T10:18:00+07:00',
                        tanggal_pengembalian: posting.tanggal_pengembalian,
                        status_order: 'Proses',
                        alasan_meminjam: posting.alasan_meminjam,
                        keterangan_ditolak: '',
                        catatan_kelengkapan_alat: posting.catatan_kelengkapan_alat,
                        id_alat: dataKatalog["data_alat"][i]['id_alat'],
                        id_user: data_user.id,
                    }
                    console.log('lagi loading mich')
                    await fetch(
                        'http://192.168.43.140:8000/sirius_api/order_log/',
                        {
                            method: 'post',
                            body: JSON.stringify(fixposting),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }

                    ).then(response => response.json())
                        // .then(response => console.log(response))
                        .then((json) => console.log(json))
                        .catch(error => console.log(error))
                    console.log(fixposting)
                }
            }
            if (i >= len - 1) {
                dispatch(getLoading(false))

                navigation.navigate('MainContainer')
            }

        }


    }
    async function fetchMyAPI() {
        if (isloading) {
            for (let i = 0; i < len; i++) {
                console.log('ini looping ke ' + i)
                if (route.counter[i] >= 1) {
                    for (let j = 0; j < route.counter[i]; j++) {
                        //setIdAlat(dataKatalog["data_alat"][i]['id_alat'])
                        //console.log(dataKatalog["data_alat"][i]['id_alat'])
                        let fixposting = {
                            token_order: Math.floor(Date.now() * Math.random()).toString(),
                            tanggal_peminjaman: '2022-04-08T10:18:00+07:00',
                            tanggal_pengembalian: posting.tanggal_pengembalian,
                            status_order: 'Proses',
                            alasan_meminjam: posting.alasan_meminjam,
                            keterangan_ditolak: '',
                            catatan_kelengkapan_alat: posting.catatan_kelengkapan_alat,
                            id_alat: dataKatalog["data_alat"][i]['id_alat'],
                            id_user: data_user.id,
                        }
                        console.log('lagi loading mich')
                        await fetch(
                            'http://192.168.43.140:8000/sirius_api/order_log/',
                            {
                                method: 'post',
                                body: JSON.stringify(fixposting),
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            }

                        ).then(response => response.json())
                            // .then(response => console.log(response))
                            .then((json) => console.log(json))
                            .catch(error => console.log(error))
                        console.log(fixposting)
                    }
                }
                dispatch(getLoading(false))

                navigation.navigate('MainContainer')

            }
        }
    }


    const handleTextChanges = (mytextname) => {
        return (val) => {
            getPosting({ ...posting, [mytextname]: val });
        }
    }




    // const insertData = async () => {


    //     return await fetch(
    //         'http://192.168.43.140:8000/sirius_api/order_log/',
    //         {
    //             method: 'post',
    //             body: JSON.stringify(posting),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         }

    //     ).then(response => response.json())
    //         // .then(response => console.log(response))
    //         .then((json) => console.log(json))
    //         .catch(error => console.log(error))

    // }

    let keys = Object.keys(dataKatalog['data_alat'])
    let len = keys.length




    //console.log(posting)


    return (
        <>
            <SafeAreaView style={styles.color}>
                <ScrollView >
                    <View style={styles.margin}>
                        <View style={styles.row} >
                            <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                            <Text style={styles.textKatalog}>
                                Pinjam Alat
                            </Text>
                        </View>
                        <View style={styles.enter40} />

                        <ProfilBar />

                        <View style={styles.enter30} />

                        <View style={styles.paragrafView}>
                            <TextInput

                                onChangeText={handleTextChanges('alasan_meminjam')}
                                placeholder="Alasan Peminjaman..."
                                value={posting.alasan_meminjam}
                                multiline
                                editable
                                maxLength={150}
                            />
                        </View>
                        <View style={styles.enter20} />
                        <View style={styles.calenderView}>
                            <Icon name='calendar-today' color={'#151D3B'} size={20} onPress={() => setOpen(true)} />
                            <Text style={{ marginLeft: 10 }}>{textDate}</Text>

                        </View>

                        <DatePicker
                            modal
                            locale='id'
                            open={open}
                            textColor='#151D3B'
                            mode='date'
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                setTextDate(date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear())
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />

                        <View style={styles.enter30} />
                        <Text style={styles.textDetail}>
                            Alat Yang Dipinjam
                        </Text>
                        <View style={styles.enter20} />
                        <FlatList
                            data={dataKatalog['data_alat']}
                            scrollEnabled={false}
                            scrollToIndex={false}
                            renderItem={({ item, index, sparators }) => {
                                //console.log(index)
                                let Ipgambar = ip + item.gambar_alat;
                                if (route.counter[index] >= 1) {
                                    return (
                                        <View>
                                            <View style={styles.listView}>

                                                <Image source={{ uri: Ipgambar }} style={styles.listImage} />
                                                <View style={styles.listboxtext}>
                                                    <View>
                                                        <Text style={styles.listTextTitle}>{item.nama_alat}</Text>
                                                        <Text style={styles.listTextsub}>Jumlah : {route.counter[index]}</Text>

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

                        <View style={styles.enter30} />

                        <CheckBox
                            //checkedIcon
                            //checkedColor='green'
                            uncheckedColor='#ECECEC'
                            textStyle={{ color: '#ECECEC' }}
                            title='Dengan ini saya bersedia bertanggung jawab sebesar-besar nya kepada alat yang saya pinjam'
                            containerStyle={styles.checkbox}
                            checked={check}
                            onPress={() => onChangeCheck(!check)}
                        />

                        <View style={styles.enter20} />
                        <TouchableOpacity style={styles.botton} onPress={submit}>
                            <Text style={styles.textBarcount}>Pinjam</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
            {isloading ? <AppLoader /> : null}
        </>
    )
}

export default PinjamTotal;