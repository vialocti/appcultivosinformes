import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
    content: {
        flex: 1,
        margin: 20,
    },
	etiqueta: {
		fontSize: 20,
	},

	input:{
		textAlign:'left',
		padding:10,
		marginBottom:5,
		fontSize:16,
		color:colors.text,
		borderWidth:2,
		width:'80%',
		height:40,
	},

	dropdownStyle: {
		width: '80%',
		height: 45,
		backgroundColor:colors.white,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: colors.gray,
	  },
	  dropdownTxtStyle: {
		color: colors.black,
		textAlign:'left'
	},
	dropdownRowStyle: {
		backgroundColor: '#EFEFEF', 
		borderBottomColor: '#C5C5C5'
	},
	dropdownRowTxtStyle: {
		color: colors.text, 
		textAlign: 'left'
	},
	messageError:{
		color:'red',
		fontWeight:'bold'
	}

	
		
	
	
})
