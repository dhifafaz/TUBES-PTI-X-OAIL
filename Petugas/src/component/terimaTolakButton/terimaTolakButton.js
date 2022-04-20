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
} from 'react-native';


const TheButton = () => {
    const [terimaSelected, setTerimaSelected] = useState(false);
    const [tolakSelected, setTolakSelected] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    
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
            <TouchableWithoutFeedback
                    onPress={() => setModalVisible(!modalVisible) }
            >
                <View style={styles.modal}>
                    <TextInput 
                        style={styles.note}
                        placeholder="Catatan ..."
                        multiline={true}
                    />
                </View> 
                
            </TouchableWithoutFeedback>
            
        </Modal>

        <Pressable 
        style={[terimaSelected ? styles.terimaButton : styles.defaultButton]}
        onPress={() => setTerimaSelected(!terimaSelected)}>
            <Text style={[terimaSelected ? styles.selectedText :styles.textButton]}>Terima</Text>
        </Pressable>
            <Pressable style={[tolakSelected ? styles.tolakButton : styles.defaultButton]  }
                onPress={() => {setModalVisible(!modalVisible); setTolakSelected(!tolakSelected);}}
                
                >
                <Text style={[tolakSelected ? styles.selectedText : styles.textButton]}>Tolak</Text>
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