import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Image, Icon, CheckBox } from 'react-native-elements';
import styles from './pinjamTotalStyle';
import ProfilBar from '../../component/profilBar/profilBar';
import DatePicker from 'react-native-date-picker'

const PinjamTotal = ({ navigation }) => {
    const [text, onChangeText] = React.useState("");
    const [check, onChangeCheck] = React.useState(false);

    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false)
    const [textDate, setTextDate] = React.useState('Tanggal Pengembalian')

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View style={styles.row} >
                    <Icon name='arrow-back-ios' color={'#ECECEC'} size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.textKatalog}>
                        Pinjam Alat
                    </Text>
                </View>
                <View style={styles.enter40} />

                <ProfilBar />

                <View style={styles.enter30} />

                <View style={styles.paragrafView}>
                    <TextInput

                        onChangeText={onChangeText}
                        placeholder="Alasan Peminjaman..."
                        value={text}
                        multiline
                        editable
                        maxLength={150}
                    />
                </View>
                <View style={styles.enter20} />
                <View style={styles.calenderView}>
                    <Icon name='calendar-today' color={'#151D3B'} size={20} onPress={() => setOpen(true)} />
                    <Text style={{ marginLeft: 10 }}>{textDate}</Text>

                </View>

                <DatePicker
                    modal
                    locale='id'
                    open={open}
                    textColor='#151D3B'
                    mode='date'
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        setTextDate(date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear())
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />

                <View style={styles.enter30} />
                <Text style={styles.textDetail}>
                    Alat Yang Dipinjam
                </Text>
                <View style={styles.enter20} />
                <View style={styles.listView}>

                    <Image source={require('../../assets/images/pixel_google.jpg')} style={styles.listImage} />
                    <View style={styles.listboxtext}>
                        <View>
                            <Text style={styles.listTextTitle}>Teleskop Mahal Oail</Text>
                            <Text style={styles.listTextsub}>Jumlah : 1</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.enter30} />

                <CheckBox
                    //checkedIcon
                    //checkedColor='green'
                    uncheckedColor='#ECECEC'
                    textStyle={{ color: '#ECECEC' }}
                    title='Dengan ini saya bersedia bertanggung jawab sebesar-besar nya kepada alat yang saya pinjam'
                    containerStyle={styles.checkbox}
                    checked={check}
                    onPress={() => onChangeCheck(!check)}
                />

                <View style={styles.enter20} />
                <TouchableOpacity style={styles.botton} onPress={() => {
                    console.log('matap');
                }}>
                    <Text style={styles.textBarcount}>Pinjam</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default PinjamTotal;