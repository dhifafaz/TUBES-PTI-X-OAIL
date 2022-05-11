import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    color: {
        backgroundColor: '#151D3B',
        flex: 1,
    },
    margin: {
        marginHorizontal: 20,
        marginBottom: 60,
        marginTop: 20,
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
    textBarcount: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC'
        //color: '',
    },
    listView: {
        height: 140,
        width: '100%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'center',
    },
    listImage: {
        //backgroundColor: 'red',
        height: "80%",
        width: 110,
        margin: 10,
        borderRadius: 10,
    },
    listboxtext:{        
        width: 200,
        marginVertical: 50,
        
    },
    listTextTitle: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
        marginVertical: 5,
        color: "#151D3B",
    },
    listTextsub: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Medium',
        marginVertical: 5,
        color: "#151D3B",
    },
    textButton: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
        textAlign: 'center',
        color: 'white',
    },
    detailButton: {
        backgroundColor: '#4B8BD4',
        borderRadius: 10,
        marginVertical: 5,
        padding: 2,
    },
})

export default styles;