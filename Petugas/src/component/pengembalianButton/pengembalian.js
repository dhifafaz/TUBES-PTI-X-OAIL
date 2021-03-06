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
import { useNavigation } from '@react-navigation/native';

const PengembalianButton = (props) => {
    console.log('testingggggg')

    const navigation = useNavigation();

    const item = props.items
    const token = props.tokens

    const toDetailPengembalian = () => {
        navigation.navigate('DetailPengembalian', {
            item: item,
            token: token
        })
    }

    return (
        <Pressable style={styles.listBotton} onPress={toDetailPengembalian}>
            <Text style={styles.listTextBotton}>Pengembalian</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    listBotton: {
        width: 90,
        height: 30,
        backgroundColor: '#FF0000',
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
export default PengembalianButton;