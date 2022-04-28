import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import styles from './detailStyle';
import { useRoute } from '@react-navigation/native';
import { getDataKatalog } from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const DetailPage = ({ navigation }) => {
    const { dataKatalog, counter, totalCounter, ip } = useSelector(state => state.userReducer);
    const route = useRoute().params


    let Ipgambar = ip + dataKatalog["data_alat"][route.index]['gambar_alat'];
    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Detail alat
                    </Text>
                </View>
                <View style={styles.enter30} />
                <Image source={{ uri: Ipgambar }} style={styles.listImage} />
                <View style={styles.enter20} />
                <Text style={styles.textDetail}>{dataKatalog["ketersediaan_alat"][route.index]['nama_alat']}</Text>
                <View style={styles.enter20} />
                <Text style={styles.textsub}>
                    {dataKatalog["data_alat"][route.index]['deskripsi']}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailPage;