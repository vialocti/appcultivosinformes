import React from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './styles'

// eslint-disable-next-line react/prop-types
const DetalleScreen = ({route}) => {
	// eslint-disable-next-line react/prop-types
	const { infoId } = route.params;
	const informe = useSelector((state) =>
	  state.info.informes.find((infoItem) => infoItem.id === infoId)
	);

	const onHandleSendInfo =()=>{
		Alert.alert('Infromacion Enviada..')
	}
    return (
		<View style={styles.container}>

			<Text style={styles.title}>Detalle Informe de Observacion</Text>
			<Text style={styles.detalle}>Fecha: {informe.fecha}</Text>
			<Text style={styles.detalle}>Tecnica Cultivo: {informe.tecnica}</Text>
			<Text style={styles.detalle}>Cultivo: {informe.cultivo}</Text>
			<Text style={styles.detalle}>Ubicacion: </Text>
			<View style={styles.imagenContent}>
				<Image style={styles.imagen} source={{uri: informe.imagen}} />
			</View>
			<TouchableOpacity style={styles.boton} onPress={onHandleSendInfo}>
				<Text style={styles.textboton}>Enviar Informacion</Text>
			</TouchableOpacity>
		</View>
	)
}

export default DetalleScreen
