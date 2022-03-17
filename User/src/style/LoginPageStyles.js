import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#151D3B',
        flex: 1,
    },
    logo: {
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 70,
    },
    logoImage:{        
        width: 175,
        height: 66
    },
    input: {
        marginHorizontal: 20,
        marginBottom: 30,        
    },
    inputArea: {
        backgroundColor: '#ECECEC',
        borderRadius: 10,        
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    masukButton: {
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: '#4B8BD4',
        paddingVertical: 10,
        borderRadius: 10,        
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color: '#151D3B',
    },
    forgetPass: {
        flexDirection: "row",  
        marginTop: 10, 
        justifyContent: 'center',            
    },
    forget: {
        color: '#ECECEC',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
    },
    reset:{
        color: '#4B8BD4',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
    },
    daftarNavigate: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 150,  
                  
    },
})

export default styles; 

