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
import { Image, Icon, SearchBar } from 'react-native-elements';
import styles from '../style/riwayatStyle';
import ProfilBar from '../component/profilBar/profilBar';

import { getDataKatalog, getRiwayat } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const RiwayatPage = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        
        fetch('http://192.168.42.184:8000/sirius_api/riwayat_peminjaman/')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.data_peminjam);
            setFilteredDataSource(responseJson.data_peminjam);
            setMasterDataSource(responseJson.data_peminjam);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource.filter(function (item) {
            const itemData = item.nama_user
            ? item.nama_user.toUpperCase()
            : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
            
        });
        setFilteredDataSource(newData);
        setSearch(text);
        } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
        }
    };

    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id_user + ' Title : ' + item.nama_user);
    };

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

                    <SearchBar
                        round
                        searchIcon={{ size: 24 }}
                        onChangeText={(text) => searchFilterFunction(text)}
                        onClear={(text) => searchFilterFunction('')}
                        placeholder="Cari disini"
                        value={search}
                        lightTheme                        
                        containerStyle={{
                            width: "100%",
                            borderColor: 'none',
                            backgroundColor: '#ECECEC',
                            border: 'none',
                            height: 50,
                            borderRadius: 10,
                        }}
                        inputContainerStyle={{
                            height: 0,
                            backgroundColor: '#ECECEC',
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Ubuntu-Medium',
                        }}
                     />
                    <View style={styles.enter30} />

                    <FlatList
                        data={filteredDataSource}
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