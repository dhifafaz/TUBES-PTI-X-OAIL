import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    color: {
        backgroundColor: '#151D3B',
        flex: 1,
    },
    margin: {
        margin: 20,
    },
    textKatalog: {
        fontSize: 24,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
    },
    imageProfile: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    card: {
        marginBottom: 20,
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 18,
        color: '#ECECEC',
        marginBottom: 5,
    },
    title2: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 16,
        color: '#ECECEC',
        marginBottom: 5,
    },
    inputArea: {
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 50,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    isiText: {
        fontFamily: 'Ubuntu-Light',
        fontSize: 16,
        backgroundColor: '#ECECEC',
        padding: 10,
        borderRadius: 5,
        marginBottom: 2,
    },
    button: {
        backgroundColor: '#ECECEC',
        padding: 10,
        borderRadius: 5,
        marginBottom: 2,
    },
    button2: {
        backgroundColor: '#ECECEC',
        padding: 10,
        borderRadius: 5,
        marginBottom: 2,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
    },
    theText: {
        fontFamily: 'Ubuntu-Light',
        fontSize: 16,
    },
    buttonOut: {
        height: 40,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    outText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 18,
        color: '#ECECEC',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#ECECEC",
        borderRadius: 10,
        borderWidth: 1 ,
        borderColor:"#FF0000",
        padding: 35,
        alignItems: "center",
        shadowColor: "#151D3B",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonModal: {
        borderRadius: 10,
        width: 60,
        paddingVertical: 10,
        elevation: 2
    },
    buttonYes: {
        backgroundColor: "#FF0000",
    },
    buttonNo: {
        backgroundColor: "#ECECEC",
        borderWidth: 1,
        borderColor: "#151D3B",
        color: "#FFFF"
    },
    textStyle: {
        color: "#ECECEC",
        fontWeight: "bold",
        textAlign: "center"
    },
    textStyleNo:{
        color: "#151D3B",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: 'Ubuntu-Medium',
        fontSize: 16,
        color: "#151D3B",
    },
    modalButton: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    modalViewAlert: {
        margin: 20,
        backgroundColor: "#ECECEC",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#151D3B",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

})

export default styles;