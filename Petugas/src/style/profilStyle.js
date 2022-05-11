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
        marginBottom: 15,
    },
    title2: {
        fontFamily: 'Ubuntu-Light',
        fontSize: 16,
        color: '#ECECEC',
        marginBottom: 5,
    },
    inputArea: {
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 50,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    isiText: {
        fontFamily: 'Ubuntu-Light',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#ECECEC',
        padding: 10,
        borderRadius: 5,
        marginBottom: 2,
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
        marginBottom: 20,
    },
    outText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 18,
        color: '#ECECEC',
    },
    
})

export default styles;