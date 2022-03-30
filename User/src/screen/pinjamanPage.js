import * as React from 'react';
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

const PinjamanPage = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.color}>
            <View style={styles.margin}>
                <Text style={styles.textKatalog}>Pinjaman</Text>
                <View style={styles.enter40} />
                <ProfilBar />

                <View style={styles.enter30} />
                <SudahAmbil />
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