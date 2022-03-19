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
import styles from '../../style/detailStyle';

const DetailPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Detail alat
                    </Text>
                </View>
                <View style={styles.enter30} />
                <Image source={require('../../assets/images/pixel_google.jpg')} style={styles.listImage} />
                <View style={styles.enter20} />
                <Text style={styles.textDetail}>Teleskop Mahal OAIL</Text>
                <View style={styles.enter20} />
                <Text style={styles.textsub}>
                    Teleskop atau teropong adalah sebuah instrumen pengamatan yang berfungsi mengumpulkan radiasi elektromagnetik dan sekaligus membentuk citra dari benda yang diamati Teleskop merupakan alat paling penting dalam pengamatan astronomi. Jenis teleskop (biasanya optik) yang dipakai untuk maksud bukan astronomis antara lain adalah transit, monokular, binokular, lensa kamera, atau keker. Teleskop memperbesar ukuran sudut benda, dan juga kecerahannya.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailPage;