import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Pressable
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import styles from '../style/riwayatStyle';
import ProfilBar from '../component/profilBar/profilBar';
import SearchingBar from '../component/searchingBar/searchingBar';

const RiwayatPage = ({ navigation }) => {
    
    const toDetailRiwayat = () => {
        navigation.navigate('DetailRiwayatPage', {})
    }
    
    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View >
                    <View style={styles.katalog}>
                        <Text style={styles.textKatalog}>Riwayat Peminjaman</Text>
                    </View>
                    <View style={styles.enter40} />

                    <ProfilBar />
                    <View style={styles.enter30} />

                    <SearchingBar />
                    <View style={styles.enter30} />

                    <View style={styles.listView}>
                        <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                        <View style={styles.listboxtext}>
                            <Text style={styles.listTextTitle}>Alexander Geovani</Text>
                            <Text style={styles.listTextsub}>Mahasiswa</Text>
                            <Text style={styles.listTextsub}>Teknik Informatika</Text>
                            <Text style={styles.listTextsub}>23-07-2021 : 26-07-2021</Text>
                            <Pressable
                                style={styles.detailButton}
                                onPress={toDetailRiwayat}>
                                <Text style={styles.textButton}

                                >Detail Riwayat</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RiwayatPage;