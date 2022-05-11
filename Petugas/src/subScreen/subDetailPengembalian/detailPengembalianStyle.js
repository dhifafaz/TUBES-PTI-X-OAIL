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
        alignItems: "stretch",
        marginVertical: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
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
        marginRight: 10,
        alignItems: 'center',
    },
    listBotton: {
        paddingVertical: 5,
        minWidth: 60,
        borderRadius: 15,
        backgroundColor: '#0DC964',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listTextBotton: {
        fontSize: 10,
        fontFamily: 'Ubuntu-Bold',
        color: '#FFFFFF',
    },
})

export default styles;