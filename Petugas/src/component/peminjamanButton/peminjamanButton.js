import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PeminjamanButton = () => {
    const navigation = useNavigation();

    const toDetailPeminjaman = () => {
        navigation.navigate('DetailPeminjaman', {})
    }

    return (
        <Pressable style={styles.listBotton} onPress={toDetailPeminjaman}>
            <Text style={styles.listTextBotton}>Peminjaman</Text>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    listBotton: {
        width: 90,
        height: 30,
        backgroundColor: '#396EB0',
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
export default PeminjamanButton;