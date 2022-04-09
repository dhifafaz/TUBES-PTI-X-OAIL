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
        //paddingRight: 10,
        flexDirection: "row",
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
    enter10: {
        height: 10,
    },
    scenView: {
        width: '100%',
        //height: 310,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scaneBar: {
        //height: 270,
        //width: 270,
        borderRadius: 10,
        backgroundColor: 'red'
    },
    sceneText: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
    },

    textmainL: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        color: '#ECECEC',
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
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }

})
export default styles;