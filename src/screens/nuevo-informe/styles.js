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
	}

})
