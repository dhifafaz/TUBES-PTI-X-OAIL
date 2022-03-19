import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import styles from '../style/homeStyle';
import ProfilBar from '../component/profilBar/profilBar';
import SearchingBar from '../component/searchingBar/searchingBar';
import { Image, Icon } from 'react-native-elements';

const HomePage = ({ navigation }) => {


    return (
        <SafeAreaView style={styles.color}>
            <View style={styles.margin}>
                <View style={styles.katalog}>
                    <Text style={styles.textKatalog}>Katalog</Text>
                </View>
                <View style={styles.enter40} />

                <ProfilBar />
                <View style={styles.enter30} />
                <View style={styles.viewEnd}>
                    <View style={styles.viewBarCount}>

                        <Text style={styles.Viewcountertext}>Total Pinjam</Text>

                        <View style={styles.viewBarColorcount}>
                            <Text style={styles.textBarcount}>0</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.enter20} />

                <SearchingBar />
                <View style={styles.enter30} />

                <View style={styles.listView}>

                    <Image source={require('../assets/images/pixel_google.jpg')} style={styles.listImage} />
                    <View style={styles.listboxtext}>
                        <View>
                            <Text style={styles.listTextTitle}>Teleskop Mahal Oail</Text>
                            <Text style={styles.listTextsub}>Stok : 10</Text>
                            <Text style={styles.listTextsub}>Detail alat...</Text>
                        </View>
                    </View>

                    <View style={styles.listButtonall}>
                        <View style={styles.listButton}>
                            <View style={styles.listButtonLeft}>
                                <Icon
                                    name='remove'
                                    color='white'
                                    size={15} />
                            </View>

                            <Text style={styles.textBarcount}>0</Text>

                            <View style={styles.listButtonRight}>
                                <Icon
                                    name='add'
                                    color='white'
                                    size={15} />
                            </View>

                        </View>
                    </View>
                </View>



            </View>
        </SafeAreaView>
    )
}

export default HomePage;