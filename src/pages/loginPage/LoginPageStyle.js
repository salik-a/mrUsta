import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    formRow: {
        
        width: "80%"
    },
    textInput: {
        backgroundColor: "#faf0e6",
        height: 50,
        padding: 15,
        color: '#333',
        borderRadius: 25,
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#f08080",
        marginVertical: 20,
        height: 50,
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    buttonText: {
        color: "white",
        fontSize: 18
    },
    welcomeText: {
        fontSize: 20,
        fontFamily: "monospace",
        marginRight: "auto"
    },
    welcome: {
        width:"75%",
        marginVertical:5        
    }
  
});