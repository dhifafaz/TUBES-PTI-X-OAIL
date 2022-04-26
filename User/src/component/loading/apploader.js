import React from 'react';
import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    StyleSheet
} from 'react-native';
import LottieView from 'lottie-react-native';

const AppLoader = () => {
    return (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
            <LottieView source={require('../../assets/other/loading.json')} autoPlay loop />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'rbga(0,0,0,3)',
        zIndex: 1
    }
})
export default AppLoader