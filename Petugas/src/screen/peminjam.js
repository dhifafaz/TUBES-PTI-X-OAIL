import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import styles from '../style/peminjamStyle';
import SearchingBar from '../component/searchingBar/searchingBar';
import ProfilBar from '../component/profilBar/profilBar';
import PeminjamanButton from '../component/peminjamanButton/peminjamanButton';
import PengembalianButton from '../component/pengembalianButton/pengembalian';
import PengambilanButton from '../component/pengambilanButton/pengambilan';
import DigunakanButton from '../component/digunakanButton/digunakan';

const PeminjamanPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View >
                    <View style={styles.katalog}>
                        <Text style={styles.textKatalog}>Daftar Peminjaman</Text>
                    </View>

                    <View style={styles.enter40} />

                    <ProfilBar />
                    <View style={styles.enter30} />

                    <SearchingBar />
                    <View style={styles.enter30} />

                    <View style={styles.listView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                            <View style={styles.listViewText}>
                                <Text style={styles.listText}>Arifudin Satria darma susuf</Text>
                                <Text style={styles.listText}>119201213</Text>
                            </View>
                        </View>
                        <View style={styles.listViewText}>
                            <PeminjamanButton />
                        </View>
                    </View>
                    <View style={styles.enter20} />
                    <View style={styles.listView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                            <View style={styles.listViewText}>
                                <Text style={styles.listText}>Arifudin Satria darma susuf</Text>
                                <Text style={styles.listText}>119201213</Text>
                            </View>
                        </View>
                        <View style={styles.listViewText}>
                            <PengambilanButton />
                        </View>
                    </View>
                    <View style={styles.enter20} />

                    <View style={styles.listView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                            <View style={styles.listViewText}>
                                <Text style={styles.listText}>Arifudin Satria darma susuf</Text>
                                <Text style={styles.listText}>119201213</Text>
                            </View>
                        </View>
                        <View style={styles.listViewText}>
                            <PengembalianButton />
                        </View>
                    </View>
                    <View style={styles.enter20} />

                    <View style={styles.listView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                            <View style={styles.listViewText}>
                                <Text style={styles.listText}>Arifudin Satria darma susuf</Text>
                                <Text style={styles.listText}>119201213</Text>
                            </View>
                        </View>
                        <View style={styles.listViewText}>
                            <DigunakanButton />
                        </View>
                    </View>
                    <View style={styles.enter20} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PeminjamanPage;