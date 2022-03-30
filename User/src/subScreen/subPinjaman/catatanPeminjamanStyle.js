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
    row: {
        //paddingRight: 10,
        flexDirection: "row",
    },
    textDetail: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
    },
    textsub: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
        textAlign: 'justify'
    },
    listImage: {
        height: 190,
        width: '100%',
        borderRadius: 10,
    },
    paragrafView: {
        height: 200,
        width: '100%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        padding: 10,
    },
    botton: {
        height: 40,
        backgroundColor: '#4B8BD4',
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
    imagesPushView: {
        height: 40,
        width: '100%',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
    },
    imageTouch: {
        backgroundColor: '#4B8BD4',
        height: 20,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 10,
    },
    imagesText: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC'
        //color: '',
    },
    imagesInputan: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Reguler',
        color: 'black',
    },
})

export default styles;