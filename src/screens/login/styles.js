import { StyleSheet } from "react-native";
import colors from "../../utils/colors";


export const styles = StyleSheet.create({
    
    containerKeyboard:{
        flex:1,
        
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        
        width:'80%',
        maxWidth:400,
        padding:15,
        margin:15,
        borderColor:colors.primary,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:colors.white,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginVertical:5,
        textAlign:'center',
        marginBottom:20,
    },
    input: {
        paddingVertical: 5,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        height:45,
        fontFamily: 'Lato-Regular',
        marginBottom: 10,
    },
    label:{
        fontSize:14,
        fontWeight:'bold',
        marginVertical:5,
    },
   
    textbottom_r:{
        fontSize:'18',
        fontWeight:'bold',
        textAlign:'center',
    },
    textbottom_l:{
        fontSize:'18',
        fontWeight:'bold',
        textAlign:'center',
        color:colors.background,
    },
    bottomlogin:{
        width:'60%',
        height:30,
        backgroundColor:colors.primary,
        borderColor:colors.black,
        borderWidth:2,
        },

    register:{
        paddingVertical:5,
        marginTop:10,
        borderColor:colors.secondary,
        borderWidth:1,
        borderRadius:1,
        backgroundColor:colors.secondary,
    },
    containerbtn:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
    },
    messageError:{
		color:'red',
		fontWeight:'bold'
	}
    


})