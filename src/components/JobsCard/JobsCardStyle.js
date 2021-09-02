import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding:15,
        justifyContent: 'center',
        
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5

    },
    descriptionText: {
        fontFamily: "Cochin",
        fontSize: 15,
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical:5
    },
    statusText: {
         color:"gray"
    },
    customerText: {
        marginLeft: 10,
         color:"gray"
    },
    dateText: {
        marginHorizontal: 5,
        color:"gray"
    },
    date: {
        flexDirection: "row",
       alignItems: "center",
    },
    top: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
       
    },
    customer: {
        flexDirection: "row",
        alignItems: "center"
    },
    textButton: {
        color: "white",
        fontSize:16
    },
    button: {
        borderRadius: 25,
        width: 100,
        height: 40,
        backgroundColor: "#f08080",
        justifyContent: "center",
        alignItems: "center",
    }
  
});