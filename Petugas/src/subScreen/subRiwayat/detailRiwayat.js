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
import styles from './detailRiwayatStyle';

const DetailRiwayatPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Detail Riwayat
                    </Text>
                </View>
                <View style={styles.profileBar}>
                    <Image source={require('../../assets/images/profil.jpg')} style={styles.image}/>
                    <View style={styles.profileDetail}>
                        <Text style={styles.textDetail}>Alexander Giovani</Text>
                        <Text style={styles.textsub}>Mahasiswa</Text>
                        <Text style={styles.textsub}>Bandar Lampung</Text>
                        <Text style={styles.textsub}>0978891234678</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTittle}>Alasan Peminjaman</Text>
                    <Text style={styles.textsub}>Kebutuhan Proyek untuk meriset penelitian kemahasiswaaan yang berkaitan dangan bintang yang sangat indah, jadi saya pengen meminjam itu untuk penelitian yang saya teliti.</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTittle}>Alat Yang Dipinjam</Text>
                    <View style={styles.cardAlat}>
                        <Image source={require('../../assets/images/pixel_google.jpg')} style={styles.image2} />

                        <View style={styles.boxText}>
                            <Text style={styles.textBoxTittle}>Teleskop Mahal Oail</Text>
                            <Text style={styles.textBox}>Jumlah : 1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTittle}>Catatan</Text>
                    <View style={styles.subCard}>
                        <Text style={styles.textBox}>Alat ini berfungsi sangat baik, saya menggunkana nya di gedung A itera untuk meneropong pintang cang cantik, akan tetapi di bagian lensa saya ketumpahan makanan saya yang lezat dan bergizi. saya tidak tau kenapa cuma saat saya melihat bintang lagi, gambar yang saya lihat sangat buram, mungkin ketumpahan makanan saya yang lezat dan bergizi itu...</Text>                    
                    </View>
                    <View style={styles.subCard}>
                        <Image source={require('../../assets/images/catatanPhoto.png')} style={styles.imageCatatan} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailRiwayatPage;