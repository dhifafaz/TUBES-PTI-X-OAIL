import * as React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from './accStyle';

const Acc = () => {
    return (
        <View style={styles.listButtonall}>
            <View style={styles.listButton}>
                <Text style={styles.textBarcount}>Terima</Text>
            </View>
        </View>
    )
}
export default Acc;