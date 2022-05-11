import * as React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from './ditolakStyle';

const Ditolak = () => {
    return (
        <View style={styles.listButtonall}>
            <View style={styles.listButton}>
                <Text style={styles.textBarcount}>Tolak</Text>
            </View>
        </View>
    )
}
export default Ditolak;