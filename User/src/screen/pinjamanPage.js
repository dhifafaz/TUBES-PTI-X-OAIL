import * as React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
} from 'react-native';
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

                    <Proses />
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

                <View style={styles.enter20} />

                <View style={styles.listView}>

                    <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                    <View style={styles.listboxtext}>
                        <View>
                            <Text style={styles.listTextTitle}>Teleskop Mahal Oail</Text>
                            <Text style={styles.listTextsub}>Jumlah : 1</Text>
                            <TouchableOpacity style={styles.botton} onPress={() => {
                                console.log('matap');
                            }}>
                                <Text style={styles.textBarcount}>Catatan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Acc />
                </View>
            </View>

        </SafeAreaView>
    )

}

export default PinjamanPage;