import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styles from '../style/home_style';
import ProfilBar from '../component/profil_bar/profil_bar';
import { SearchBar } from 'react-native-elements';

const HomePage = ({ navigation }) => {

    const [textKeberangkatan, onChangeKeberangkatan] = React.useState('');

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
                <TextInput
                    style={styles.viewtextInput}
                    onChangeText={onChangeKeberangkatan}
                    value={textKeberangkatan}
                    placeholder="Tulis..." />


            </View>
        </SafeAreaView>
    )
}

export default HomePage;