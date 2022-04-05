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
        marginLeft: 20,
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
    subCard: {
        backgroundColor: "#ECECEC",
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
    },
    imageCatatan: {
        borderRadius: 10,
        width: "100%",
        height: 180,
    },
})
export default styles;