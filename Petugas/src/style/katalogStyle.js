import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    color: {
        backgroundColor: '#151D3B',
        flex: 1,
    },
    katalog: {

    },
    margin: {
        margin: 20,
    },
    textKatalog: {
        fontSize: 24,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
    },
    enter40: {
        height: 40,
    },
    enter30: {
        height: 30,
    },
    enter20: {
        height: 20,
    },
    viewEnd: {
        alignItems: 'flex-end',
    },
    viewBarCount: {
        backgroundColor: '#ECECEC',
        height: 30,
        width: 170,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: 'flex-end',

    },
    viewBarColorcount: {
        backgroundColor: '#4B8BD4',
        width: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    Viewcountertext: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Bold',
        textAlign: 'center',
        padding: 8,
        //alignItems: 'center',
        //justifyContent: 'center',
        flex: 0.8,
        color: 'black'

    },
    textBarcount: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC'
        //color: '',
    },
    textBarcounter: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Bold',
        color: 'black'
        //color: '',
    },
    viewTextInput: {
        backgroundColor: '#ECECEC',
        height: 40,
        borderRadius: 10,
    },
    viewtextInput: {
        height: 40,
        width: "100%",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'powderblue',
        //padding: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#ECECEC',
    },
    seacrhing: {
        backgroundColor: 'red',
    },

    listView: {
        height: 100,
        width: '100%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        flexDirection: "row",
    },
    listImage: {
        //backgroundColor: 'red',
        height: 80,
        width: 90,
        margin: 10,
        borderRadius: 10,
    },
    listboxtext: {
        //backgroundColor: 'red',
        height: 80,
        width: 170,
        marginVertical: 10,
        justifyContent: 'center',
    },
    listTextTitle: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
        marginVertical: 5,
        color: 'black'
    },
    listTextsub: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Bold',
        marginVertical: 5,
        color: 'black'
    },
    listButtonall: {
        flexDirection: 'column-reverse',
        height: 80,
    },
    listButton: {
        height: 20,
        width: 70,
        backgroundColor: '#F5F2E7',
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        alignItems: 'center',

    },
    listButtonLeft: {
        width: 20,
        height: '100%',
        backgroundColor: '#151D3B',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        //textAlign: 'center',
        //margin: 0,

    },
    listButtonRight: {
        width: 20,
        height: '100%',
        backgroundColor: '#151D3B',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        //textAlign: 'center',
        //margin: 0,

    },
})

export default styles;