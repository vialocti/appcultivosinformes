import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './styles'

// eslint-disable-next-line react/prop-types
const DetalleScreen = ({route}) => {
	// eslint-disable-next-line react/prop-types
	const { infoId } = route.params;
	const informe = useSelector((state) =>
	  state.info.informes.find((infoItem) => infoItem.id === infoId)
	);

    return (
		<View style={styles.container}>
			<Text style={styles.title}>{informe.cultivo}</Text>
		</View>
	)
}

export default DetalleScreen
