import React,{ useEffect }  from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { db } from '../../db/firebase'
import { styles } from './styles'

// eslint-disable-next-line react/prop-types
const DetalleScreen = ({route}) => {
	// eslint-disable-next-line react/prop-types
	const { infoId } = route.params;
	const informe = useSelector((state) =>
	  state.info.informes.find((infoItem) => infoItem.id === infoId)
	);
    
	useEffect(()=>{
		 // console.log(informe)
	},[])
	const onHandleSendInfo =()=>{
		
		db.collection('informes_db').add(informe)
		Alert.alert('Infromacion Enviada..')

		// console.log(informe)
	}
    return (
		<ScrollView style={styles.container}>

			<Text style={styles.title}>Detalle Informe de Observacion</Text>
			
			<Text style={styles.detalle}>Tecnica Cultivo: {informe.tecnica}</Text>
			<Text style={styles.detalle}>Cultivo: {informe.cultivo}</Text>
			<Text style={styles.detalle}>Valor PH: {informe.solucionPh}</Text>
			<Text style={styles.detalle}>Valor EletroConductividad: {informe.solucionEc}</Text>
			<Text style={styles.detalle}>Ubicacion</Text>
			<Text style={styles.detallel}>Latitud:{informe.latitud} </Text>
			<Text style={styles.detallel}>Longitud:{informe.longitud} </Text>
			{/** 
			<Text style={styles.detallel}>Latitud:{JSON.parse(informe.location).lat} </Text>
			<Text style={styles.detallel}>Longitud:{JSON.parse(informe.location).lng} </Text>
		*/}
			<View style={styles.imagenContent}>
				<Image style={styles.imagen} source={{uri: informe.imagen}} />
			</View>
			<TouchableOpacity style={styles.boton} onPress={onHandleSendInfo}>
				<Text style={styles.textboton}>Enviar Informacion</Text>
			</TouchableOpacity>
		</ScrollView>
	)
}

export default DetalleScreen
