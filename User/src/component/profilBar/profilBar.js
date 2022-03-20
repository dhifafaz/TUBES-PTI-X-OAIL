import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import styles from './styleProfilBar';
import { Avatar } from "@react-native-material/core";

const ProfilBar = () => {
    return (
        <View style={styles.viewAvatar}>
            <View>
                <Avatar size={60} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            </View>
            <View style={styles.textViewAvatar}>
                <Text style={styles.textAvatar}>Ariefuddin Satria Darma</Text>
                <Text style={styles.textAvatar}>Mahasiswa</Text>
            </View>

        </View>
    )
}

export default ProfilBar;