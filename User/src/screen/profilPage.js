import React, {useState} from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Pressable,
    ScrollView,
    Image,
    Modal,
} from 'react-native';
import styles from '../style/profilPageStyle';
import { Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfilPage = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    
    const navigation = useNavigation();

    const { userBanget } = useSelector(state => state.userReducer);
    return (

        <SafeAreaView style={styles.color}>
            <ScrollView style={styles.margin}>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Anda yakin keluar aplikasi?</Text>
                                <View style={styles.modalButton}>
                                    <Pressable
                                        style={[styles.buttonModal, styles.buttonYes]}
                                        onPress={() => {
                                            try {
                                                AsyncStorage.removeItem('token');
                                            }
                                            catch (exception) {
                                                console.log(exception)
                                            } finally {
                                                navigation.navigate('Login', {})
                                            }
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Keluar</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.buttonModal, styles.buttonNo]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyleNo}>Tidak</Text>
                                    </Pressable>
                                </View>
                                
                            </View>
                        </View>
                    </Modal>                    
                </View>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={alertVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setAlertVisible(!alertVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalViewAlert}>
                                <Text style={styles.modalText}>Coming Soon :)</Text>
                                <Pressable
                                    style={[styles.buttonModal, styles.buttonNo]}
                                    onPress={() => setAlertVisible(!alertVisible)}
                                >
                                    <Text style={styles.textStyleNo}>Tutup</Text>
                                </Pressable>
                                
                            </View>
                        </View>
                    </Modal>
                </View>

                <Text style={styles.textKatalog}>Profil</Text>
                <View style={styles.imageProfile}>
                    <Image source={{ uri: userBanget.profile_pic }} style={styles.image} />
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
                            
                            <Text style={styles.title2}>Institusi</Text>
                            <View style={styles.inputArea}>
                                <Text style={styles.isiText}>{userBanget.profiles['prodi_unit_institusi']}</Text> 
                            </View>

                            <Text style={styles.title2}>NIM/NIK/NIP</Text>
                            <View style={styles.inputArea}>
                                <Text style={styles.isiText}>{userBanget.profiles['NRK_NIK_NIP_NIM']}</Text>
                            </View>

                            <Text style={styles.title2}>Alamat</Text>
                            <View style={styles.inputArea}>
                                <Text style={styles.isiText}>{userBanget.profiles['alamat']}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.title}>Keamanan</Text>
                        <View>
                            <View style={styles.inputArea}>
                                <Text style={styles.theText}>{userBanget.email}</Text>
                            </View>
                            <View style={styles.inputArea}>
                                <Text style={styles.theText}>********</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.title}>Lainnya</Text>
                        <View>
                            <Pressable
                                onPress={() => setAlertVisible(true)}>
                                <View style={styles.inputArea}>
                                    <Text style={styles.theText}>FAQ</Text>
                                </View>
                            </Pressable> 
                            <Pressable 
                                onPress={() => setAlertVisible(true)}>
                                <View style={styles.inputArea}>
                                    <Text style={styles.theText}>Masukkan</Text>
                                </View>                                    
                            </Pressable> 
                        </View>
                    </View>
                    <View>
                        <Pressable style={styles.buttonOut} onPress={() => setModalVisible(true)}>
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