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

const DigunakanButton = () => {
    return (
        <TouchableOpacity style={styles.listBotton}>
            <Text style={styles.listTextBotton}>Digunakan</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listBotton: {
        width: 90,
        height: 30,
        backgroundColor: '#FF8E00',
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
export default DigunakanButton;