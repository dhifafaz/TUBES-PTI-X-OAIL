import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import styles from '../style/katalogStyle';
import ProfilBar from '../component/profilBar/profilBar';
import SearchingBar from '../component/searchingBar/searchingBar';
import { Image, Icon } from 'react-native-elements';


const KatalogPage = ({ navigation }) => {

    const toDetail = () => {
        navigation.navigate('DetailPage', {})
    }

    return (
        <SafeAreaView style={styles.color}>
            <View style={styles.margin}>
                <View style={styles.katalog}>
                    <Text style={styles.textKatalog}>Katalog</Text>
                </View>
                <View style={styles.enter40} />

                <ProfilBar />
                <View style={styles.enter30} />

                <SearchingBar />
                <View style={styles.enter30} />

                <View style={styles.listView}>

                    <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                    <View style={styles.listboxtext}>
                        <View>
                            <Text style={styles.listTextTitle}>Teleskop Mahal Oail</Text>
                            <Text style={styles.listTextsub}>Stok : 10</Text>
                            <Text
                                style={styles.listTextsub}
                                onPress={toDetail}
                            >Detail alat...</Text>
                        </View>
                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default KatalogPage;