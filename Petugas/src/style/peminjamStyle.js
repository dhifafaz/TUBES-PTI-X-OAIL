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
    listView: {
        width: '100%',
        height: 70,
        borderRadius: 10,
        backgroundColor: '#ECECEC',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listImage: {
        height: 50,
        width: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    listViewText: {
        justifyContent: 'center'
    },
    listText: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Medium',
        color: 'black',
        marginVertical: 2,
    },
    listBotton: {
        width: 90,
        height: 30,
        backgroundColor: '#396EB0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listTextBotton: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
    },

})

export default styles;