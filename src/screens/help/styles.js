import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentTitle:{
		padding:10,
		width:'100%',
		
		
	},
	title: {
		textAlign:'center',
		fontSize: 20,
		fontFamily:'Lato-Bold',
		
	},

	contentsubTitle:{
		width:'100%',
		marginLeft:2,
		marginVertical:15,
		
	},
	subTitle: {

		textAlign:'left',
		fontSize: 16,
		fontFamily:'Lato-Bold',
		marginBottom:5,
		marginLeft:2,
	},
	tips:{
		fontFamily:'Lato-Regular',
		fontSize:14,
		marginLeft:10,
		color:colors.textTips,

	},
	bottomT:{
		marginTop:10,
		marginLeft:'10%',
		width:'80%',
		height:50,
		alignItems:'center',
		justifyContent:'center',
		padding:10,
		backgroundColor:colors.terciary
	},
	bottomtitle:{
		fontFamily:'Lato-Bold',
		fontSize:20,
		textAlign:'center'
	},
})