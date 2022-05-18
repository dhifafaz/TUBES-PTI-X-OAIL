import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151D3B',
        flex: 1,
    },
    logo: {
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 70,
    },
    logoImage: {
        width: 175,
        height: 66
    },
    input: {
        marginHorizontal: 20,
        marginBottom: 30,
    },
    inputArea: {
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    masukButton: {
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: '#4B8BD4',
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: '#151D3B',
    },
    buttonText1: {
        fontWeight: "bold",
        fontSize: 18,
        color: '#ECECEC',
    },
    forgetPass: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: 'center',
    },
    forget: {
        color: '#ECECEC',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
    },
    reset: {
        color: '#4B8BD4',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default styles;

