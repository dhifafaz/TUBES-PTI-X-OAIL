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
    picker: {
        height: 10,
        width: '100%',


        //width: 300,
        //padding: 0,
        //borderWidth: 1,
        borderColor: "#BDDDE3",
    },
    textPic: {
        color: '#ECECEC',
        fontFamily: 'Ubuntu-Bold',
    },
    textdest: {

        //fontFamily: 'Ubuntu-Bold',
        margin: 10,
        color: 'black'
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
        height: 50,
        width: '100%',
    },
    touch: {
        margin: 10,
        backgroundColor: '#4B8BD4',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        width: 60,
    },
    inputArea1: {
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        marginBottom: 10,
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    masukButton: {
        alignItems: 'center',
        justifyContent: 'center',
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
    daftarNavigate: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 150,

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

