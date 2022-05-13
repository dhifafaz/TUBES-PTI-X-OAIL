import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Pressable,
    ScrollView,
    Image,
    Modal
} from 'react-native';
import styles from '../style/profilStyle';
import { Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';


const ProfilPage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
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
                                </View>
                                <Text style={styles.title2}>Password</Text>
                                <View style={styles.inputArea}>
                                    <Text style={styles.theText}>********</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Pressable style={styles.buttonOut} onPress={() => setModalVisible(true)}>
                            <Text style={styles.outText}>Keluar</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default ProfilPage;