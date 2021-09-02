import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    innerContainer: {
        borderRadius: 15,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        height: "94%",
        width: "92%",
        padding:20
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        paddingVertical:10
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical:5
    },
    description: {
        paddingVertical:10,
        borderColor: "#d3d3d3",
        borderBottomWidth: 1,
    },
    date: {
        borderColor: "#d3d3d3",
        borderBottomWidth: 1,
        paddingVertical:10
    },
    dateText: {
        fontSize: 14,
        fontStyle: "italic",
        color: "gray"
    },
    jobHeader: {
        
        borderColor: "#d3d3d3",
        borderBottomWidth: 1,
        paddingVertical:10
    },
    jobText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    customer: {
        marginTop:10,
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
  
});