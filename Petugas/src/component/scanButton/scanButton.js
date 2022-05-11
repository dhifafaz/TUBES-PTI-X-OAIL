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
import { useNavigation } from '@react-navigation/native';

const ScanButton = () => {
    const navigation = useNavigation();

    const toScan = () => {
        navigation.navigate('ScenePage', {})
    }

    return (
        <Pressable style={styles.listBotton} onPress={toScan}>
            <Text style={styles.listTextBotton}>Scan</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    listBotton: {
        paddingVertical: 5,
        minWidth: 60,
        borderRadius: 15,
        backgroundColor: '#0DC964',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listTextBotton: {
        fontSize: 10,
        fontFamily: 'Ubuntu-Bold',
        color: '#FFFFFF',
    },
})
export default ScanButton;