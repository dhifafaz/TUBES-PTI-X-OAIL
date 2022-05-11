import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Pressable,
    ScrollView,
    Image,
} from 'react-native';
import styles from '../style/profilStyle';
import { Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';


const ProfilPage = ({ navigation }) => {

    const { userBanget } = useSelector(state => state.userReducer);

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>
                <View >
                    <Text style={styles.textKatalog}>Profil</Text>
                    <View style={styles.imageProfile}>
                        <Image source={require('../assets/images/profil.jpg')} style={styles.image} />
                    </View>
                    <View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Data Pribadi</Text>
                            <View>
                                <Text style={styles.title2}>Nama Lengkap</Text>
                                <View style={styles.inputArea}>
                                    <Text style={styles.isiText}>{userBanget.nama}</Text>
                                </View>
                                <Text style={styles.title2}>Peran</Text>
                                <View style={styles.inputArea}>
                                    <Text style={styles.isiText}>{userBanget.role}</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Keamanan</Text>
                            <View>
                                <Text style={styles.title2}>Email</Text>
                                <View style={styles.inputArea}>
                                    <Text style={styles.theText}>{userBanget.email}</Text>
                                    <Pressable onPress={() => {
                                        console.log('pencil');
                                    }}>
                                        <Icon name="pencil" type='entypo' size={20} />
                                    </Pressable>
                                </View>
                                <Text style={styles.title2}>Password</Text>
                                <View style={styles.inputArea}>
                                    <Text style={styles.theText}>********</Text>
                                    <Pressable onPress={() => {
                                        console.log('pencil');
                                    }}>
                                        <Icon name="pencil" type='entypo' size={20} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Pressable style={styles.buttonOut} onPress={() => {
                            console.log('out');
                        }}>
                            <Text style={styles.outText}>Keluar</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default ProfilPage;