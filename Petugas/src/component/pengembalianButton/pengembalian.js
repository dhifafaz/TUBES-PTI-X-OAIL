import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const PengembalianButton = () => {
    return (
        <TouchableOpacity style={styles.listBotton}>
            <Text style={styles.listTextBotton}>Pengambalian</Text>
        </TouchableOpacity>
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