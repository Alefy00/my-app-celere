import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    label:{
        fontSize: 18,
        marginBottom: 8,
    },
    input:{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom:16,
        paddingHorizontal: 8,
    },
    modalContent:{
        backgroundColor:'white',
        padding:22,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4,
        borderColor: 'rgba(0,0,0, 0.1 )'
    },
    modalText:{
        fontSize: 18,
        marginBottom:12,
    }

})