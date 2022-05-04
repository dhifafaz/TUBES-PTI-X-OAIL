import React, { useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';



const PeminjamanButton = (props) => {
    const item = props.items
    const token = props.tokens
    const navigation = useNavigation();
    console.log(token)


    const toDetailPeminjaman = () => {
        navigation.navigate('DetailPeminjaman', {
            item: item,
            token: token
        })
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