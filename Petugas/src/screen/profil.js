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


const ProfilPage = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.color}>
            <ScrollView>
                <View style={styles.margin}>
                   <Text style={styles.textKatalog}>Profil</Text> 
                   <View style={styles.imageProfile}> 
                       <Image source={require('../assets/images/profil.jpg')} style={styles.image}/>
                   </View>
                   <View>
                       <View style={styles.card}>
                           <Text style={styles.title}>Data Pribadi</Text>
                           <View>
                               <Text style={styles.isiText}>Dapa</Text>
                                <Text style={styles.isiText}>Staff OAIL</Text>
                           </View>
                       </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Keamanan</Text>
                            <View>
                                <View style={styles.button2}>
                                    <Text style={styles.theText}>dapa1945@gmail.com</Text>
                                    <Pressable onPress={() => {
                                        console.log('pencil');
                                    }}>
                                        <Icon name="pencil" type='entypo' size={20}/>
                                    </Pressable>
                                </View>
                                <View style={styles.button2}>
                                    <Text style={styles.theText}>********</Text>
                                    <Pressable onPress={() => {
                                        console.log('pencil');
                                    }}>
                                        <Icon name="pencil" type='entypo' size={20}/>
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