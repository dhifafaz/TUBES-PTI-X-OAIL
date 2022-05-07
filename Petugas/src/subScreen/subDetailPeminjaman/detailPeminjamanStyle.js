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
    row: {
        flexDirection: "row",
    },
    profileBar: {
        flexDirection: "row",
        //justifyContent: 'space-between',
        alignItems: "stretch",
        marginVertical: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 30,
    },
    profileDetail: {
        marginHorizontal: 20,
    },
    textDetail: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
        marginBottom: 5,
    },
    textsub: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Medium',
        color: '#ECECEC',
        textAlign: 'justify',
        marginBottom: 5,
    },
    textTittle: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
        marginBottom: 5,
    },
    card: {
        marginBottom: 20,
    },
    cardAlat: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#ECECEC",
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
    },
    image2: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    boxText: {
        marginLeft: "-2%",
    },
    textBoxTittle: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
        color: "#151D3B",
    },
    textBox: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Medium',
        color: "#151D3B",
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
    theButton: {
        flexDirection: 'column',
        marginRight: "1%",
        alignItems: 'center',
    },
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

export default styles;