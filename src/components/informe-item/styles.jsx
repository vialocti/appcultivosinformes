import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles =StyleSheet.create({
    
    container:{
        borderBottomColor:colors.secondary,
        borderBottomWidth:1,
        padding:15,
        flexDirection:"row",
        alignItems:"center",
    },
    image:{
        width:90,
        height:90,
        borderRadius:20,
        backgroundColor:colors.primary
    },
    info:{
        flex:1,
        marginLeft:15,
        justifyContent:"center",
        alignItems:"flex-start"
    },
    title:{
        fontSize:18,
        marginBottom:10,
        color:colors.text
    }
})