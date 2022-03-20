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
    enter40: {
        height: 40,
    },
    enter30: {
        height: 30,
    },
    enter20: {
        height: 20,
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
        //flexDirection: 'column-reverse',
        height: 80,
        margin: 10,
        borderRadius: 10,
    },
    listButton: {
        height: 20,
        width: 70,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },

    textBarcount: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC'
        //color: '',
    },
    botton: {
        height: 40,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

})

export default styles;