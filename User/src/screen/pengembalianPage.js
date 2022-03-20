import * as React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../style/pengembalianStyle';
import ProfilBar from '../component/profilBar/profilBar';
import { Image, Icon } from 'react-native-elements';


const PengembalianPage = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView>
                <View style={styles.margin}>
                    <Text style={styles.textKatalog}>Pengembalian</Text>
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
                    </View>
                    <View style={styles.enter40} />
                    <TouchableOpacity style={styles.botton} onPress={() => {
                        console.log('matap');
                    }}>
                        <Text style={styles.textBarcount}>Kembalikan</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    )

}

export default PengembalianPage;