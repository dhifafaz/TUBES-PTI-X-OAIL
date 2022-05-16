import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    TouchableOpacity,
    RefreshControl
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

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const PeminjamanPage = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        
        fetch('http://192.168.42.104:8000/sirius_api/daftar_peminjam/')
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

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        dispatch(getDaftarPeminjam())
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const { daftarPeminjman, ip } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDaftarPeminjam())
        console.log(ip)
    }, [])

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
                        <Text style={styles.textKatalog}>Daftar Peminjaman</Text>
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
                    <View style={styles.enter30} />


                    <FlatList
                        data={filteredDataSource}
                        renderItem={({ item, index, separators }) => {

                            if (item.status_order === 'proses' || item.status_order === 'meminta-pengambilan' || item.status_order === 'meminta-pengembalian' || item.status_order === 'digunakan') {
                                return (
                                    <View>
                                        <View style={styles.listView}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={{ uri: item.profile_pic }} style={styles.listImage} />
                                                <View style={styles.listViewText}>
                                                    <Text style={styles.listText}>{item.nama_user}</Text>
                                                    <Text style={styles.listText}>{item.role}</Text>
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
                                                    item.status_order === 'meminta-pengembalian' ? <PengembalianButton items={item} tokens={item.token_order} /> : null
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