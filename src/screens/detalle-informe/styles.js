import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		margin:10,
		padding:5,
		textAlign:'center',
		fontSize:20,
		backgroundColor:colors.gray,
	},
	imagen:{
		width:'100%',
		height:'100%'
	},
	imagenContent:{
		width: "100%",
        height: 300,
		padding:20,
		alignContent:'center',
				
		},
	detalle:{
		fontSize:16,
		marginBottom:5,
		marginLeft:15,
	},
	boton:{
		borderWidth:2,
		borderRadius:5,
		borderColor:'blue',
		width:'50%',
		alignItems:'center',
		marginLeft:90,
	},
	textboton:{
		fontSize:18,
		color:colors.text,
	}
})
