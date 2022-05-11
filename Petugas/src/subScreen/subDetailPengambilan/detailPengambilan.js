import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Pressable,
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import styles from './detailPengambilanStyle';
import ScanButton from '../../component/scanButton/scanButton'


const DetailPengambilan = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Detail Pengambilan
                    </Text>
                </View>
                <View style={styles.profileBar}>
                    <Image source={require('../../assets/images/profil.jpg')} style={styles.image} />
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
                        <View style={styles.theButton}>
                            <ScanButton/>
                        </View>
                    </View>
                </View>
                <View>
                    <Pressable style={styles.button} onPress={() => {
                        console.log('KIRIM');
                    }}>
                        <Text style={styles.buttonText}>Kirim</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailPengambilan;