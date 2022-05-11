import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    Pressable,
    Modal,
    View,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';


const TheButton = () => {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [status,setStatus] = useState();
    const setStatusFilter = status => {
        setStatus(status)
    }

    return (
        <>
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <KeyboardAvoidingView 
                behavior="position"
                enable>
                    <TouchableWithoutFeedback
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <View style={styles.modal}>
                            <TextInput
                                style={styles.note}
                                placeholder="Catatan ..."
                                multiline={true}
                            />
                            <Pressable style={styles.button} onPress={() => {
                                console.log('KIRIM');
                            }}>
                                <Text style={styles.buttonText}>Kirim</Text>
                            </Pressable>
                        </View>

                    </TouchableWithoutFeedback>
            </KeyboardAvoidingView>        
        </Modal>

        <Pressable 
            style={[status === 'Terima' ? styles.terimaButton : styles.defaultButton]}
            onPress={() => setStatusFilter('Terima')}>
            <Text style={[status === 'Terima' ? styles.selectedText :styles.textButton]}>Terima</Text>
        </Pressable>
        <Pressable 
            style={[status === 'Tolak' ? styles.tolakButton : styles.defaultButton]  }
                onPress={() => { setModalVisible(!modalVisible); setStatusFilter('Tolak');}}>
                <Text style={[status === 'Tolak' ? styles.selectedText : styles.textButton]}>Tolak</Text>
        </Pressable>
        </> 
    )
}

const styles = StyleSheet.create({
    textButton: {
        fontSize: 10,
        fontFamily: 'Ubuntu-Bold',
        textAlign: 'center',
    },
    defaultButton: {
        backgroundColor: "#C4C4C4",
        paddingVertical: 5,
        minWidth: 60,
        borderRadius: 15,
        marginBottom: 5,
    },
    terimaButton: {
        backgroundColor: "#0DC964",
        paddingVertical: 5,
        minWidth: 60,
        borderRadius: 15,
        marginBottom: 5,
    },
    selectedText: {
        fontSize: 10,
        fontFamily: 'Ubuntu-Bold',
        textAlign: 'center',
        color: "#ECECEC",
    },
    tolakButton: {
        backgroundColor: "#FF0000",
        paddingVertical: 5,
        minWidth: 60,
        borderRadius: 15,
        marginBottom: 5,
    },
    modal: {
        backgroundColor: "#ffff",
        minHeight: "50%",
        marginTop: "80%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 20,
    },
    note: {
        backgroundColor: "#CDCDCD",
        borderRadius: 10,
        padding: 10,
        minHeight: "30%",        
        marginBottom: 20, 
    },
    button: {
        backgroundColor: "#4B8BD4",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: "center",
        fontFamily: 'Ubuntu-Bold',
        color: "#ECECEC",
        fontSize: 16,
    },

})

export default TheButton;