import * as React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from './prosesStyle';

const Proses = () => {
    return (
        <View style={styles.listButtonall}>
            <View style={styles.listButton}>
                <Text style={styles.textBarcount}>Proses</Text>
            </View>
        </View>
    )
}
export default Proses;