import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'

export const styles = StyleSheet.create({

	container:{
		flex:1,
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center',
		
	},
	content: {
		flex:1,
		alignContent:'center',
		justifyContent:'center',
		
	},
   header:{
	width:'100%',
	backgroundColor:colors.terciary,
	paddingVertical:10,
   },

	title: {
		fontSize: 24,
		fontFamily:'Lato-Bold',
		textAlign:'center'

	},

	footer:{
		width:'100%',
		padding:5,
		height:70,
		backgroundColor:colors.terciary,
		marginBottom:5,
	},
	
	imagen:{
		margin:40,
		width:200,
		height:200,
	},

	


	
})