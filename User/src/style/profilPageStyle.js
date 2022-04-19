import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    color: {
        backgroundColor: '#151D3B',
        flex: 1,
        height: "80%",
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
    buttonOut:{
        height: 40,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    outText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 18,
        color: '#ECECEC',
    },
    
})

export default styles;