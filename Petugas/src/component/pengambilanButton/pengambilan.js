import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Pressable,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const PengambilanButton = (props) => {

    const item = props.items
    const token = props.tokens
    const navigation = useNavigation();
    console.log(token)


    const toDetailPengambilan = () => {
        navigation.navigate('DetailPengambilan', {
            item: item,
            token: token
        })
    }

    return (
        <Pressable style={styles.listBotton} onPress={toDetailPengambilan}>
            <Text style={styles.listTextBotton}>Pengambilan</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    listBotton: {
        width: 90,
        height: 30,
        backgroundColor: '#47C947',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listTextBotton: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
    },
})
export default PengambilanButton;