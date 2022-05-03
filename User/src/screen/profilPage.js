import * as React from 'react';
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
import styles from '../style/profilPageStyle';
import { Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const ProfilPage = () => {
    const navigation = useNavigation();



    const { userBanget } = useSelector(state => state.userReducer);
    return (
        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>

                <Text style={styles.textKatalog}>Profil</Text>
                <View style={styles.imageProfile}>
                    <Image source={{ uri: userBanget.profile_pic }} style={styles.image} />
                </View>
                <View>
                    <View style={styles.card}>
                        <Text style={styles.title}>Data Pribadi</Text>
                        <View>
                            <Text style={styles.isiText}>{userBanget.nama}</Text>
                            <Text style={styles.isiText}>{userBanget.role}</Text>
                            <Text style={styles.isiText}>{userBanget.profiles['prodi_unit_institusi']}</Text>
                            <Text style={styles.isiText}>{userBanget.profiles['NRK_NIK_NIP_NIM']}</Text>
                            <Text style={styles.isiText}>{userBanget.profiles['alamat']}</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.title}>Keamanan</Text>
                        <View>
                            <View style={styles.button2}>
                                <Text style={styles.theText}>{userBanget.email}</Text>
                                <Pressable onPress={() => {
                                    console.log('pencil');
                                }}>
                                    <Icon name="pencil" type='entypo' size={20} />
                                </Pressable>
                            </View>
                            <View style={styles.button2}>
                                <Text style={styles.theText}>********</Text>
                                <Pressable onPress={() => {
                                    console.log('pencil');
                                }}>
                                    <Icon name="pencil" type='entypo' size={20} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.title}>Lainnya</Text>
                        <View>
                            <Pressable style={styles.button} onPress={() => {
                                console.log('mantap');
                            }}>
                                <Text style={styles.theText}>Lainnya</Text>
                            </Pressable>
                            <Pressable style={styles.button} onPress={() => {
                                console.log('mantap');
                            }}>
                                <Text style={styles.theText}>Masukkan</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <Pressable style={styles.buttonOut} onPress={() => {
                            try {
                                AsyncStorage.removeItem('token');
                            }
                            catch (exception) {
                                console.log(exception)
                            } finally {
                                navigation.navigate('Login', {})
                            }

                        }}>
                            <Text style={styles.outText}>Keluar</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={{ height: 70 }} />


            </ScrollView>
        </SafeAreaView>
    )

}

export default ProfilPage;