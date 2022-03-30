import * as React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import styles from './catatanPeminjamanStyle';
import { Image, Icon } from 'react-native-elements';

const CatatanAlat = ({ navigation }) => {

    const [text, onChangeText] = React.useState("");

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Catatan Alat
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

                <View style={styles.enter20} />

                <View style={styles.paragrafView}>
                    <TextInput

                        onChangeText={onChangeText}
                        placeholder="Catatan alat"
                        value={text}
                        multiline
                        editable
                        maxLength={150}
                    />
                </View>
                <View style={styles.enter20} />

                <View style={styles.imagesPushView}>

                    <TouchableOpacity style={styles.imageTouch} onPress={() => {
                        console.log('matap');
                    }}>
                        <Text style={styles.imagesText}>Pilih Gambar</Text>
                    </TouchableOpacity>
                    <Text style={styles.imagesInputan}>contohAja.png</Text>

                </View>

                <View style={styles.enter20} />
                <TouchableOpacity style={styles.botton} onPress={() => {
                    console.log('matap');
                }}>
                    <Text style={styles.textBarcount}>Simpan</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

}

export default CatatanAlat;