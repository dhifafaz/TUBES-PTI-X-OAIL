import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    RefreshControl,
    ScrollView

} from 'react-native';
import styles from '../style/katalogStyle';
import ProfilBar from '../component/profilBar/profilBar';
import SearchingBar from '../component/searchingBar/searchingBar';
import { Image, Icon, SearchBar } from 'react-native-elements';
import { getDataKatalog } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const KatalogPage = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        
        fetch('http://192.168.42.104:8000/sirius_api/katalog/')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.data_alat);
            setFilteredDataSource(responseJson.data_alat);
            setMasterDataSource(responseJson.data_alat);
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
            const itemData = item.nama_alat
            ? item.nama_alat.toUpperCase()
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
        alert('Id : ' + item.id_alat + ' Title : ' + item.nama_alat);
    };


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        dispatch(getDataKatalog())
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const { dataKatalog, ip } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataKatalog())
        console.log(ip)
    }, [])

    console.log(dataKatalog)


    return (
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

                    <SearchBar
                        round
                        searchIcon={{ size: 24 }}
                        onChangeText={(text) => searchFilterFunction(text)}
                        onClear={(text) => searchFilterFunction('')}
                        placeholder="Type Here..."
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
                    <View style={styles.enter20} />
                    <FlatList
                        data={filteredDataSource}
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default KatalogPage;