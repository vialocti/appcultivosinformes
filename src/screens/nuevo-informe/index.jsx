import React,{useState} from 'react'
import { Button, ScrollView, Text, TextInput, View} from 'react-native'
import { useDispatch} from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { LocationFrame } from '../../components'
import ImageFrame from '../../components/image-frame'
import { saveInfo } from '../../store/info.slice'
import colors from '../../utils/colors'
import { styles } from './styles'

import SelectDropdown from 'react-native-select-dropdown'

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const NuevoInfoScreen = ({navigation}) => {
    
	const tcultivo = ["Estacionaria de Mecha", "Estacionaria de raiz flotante","Recirculante Goteo", "Recirculante NFT"]
	const dispatch = useDispatch()
	const [tecnica, setTecnica] = useState('')
	const [cultivo, setCultivo] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [image, setImage] = useState(null)
	const [solucionPh, setSolucionPh] = useState('')
	const [solucionEc,setsolucionEc] = useState('')
	const [latitud, setLatitud] = useState('')
	const [longitud, setLongitud] = useState('')
	const [errorC, setErrorC] = useState(false)
	const onHandlerImage = (imageUri) => {
		setImage(imageUri);
	  };

	const onHandleLocation = (coordsLocation)=>{
		setLatitud(coordsLocation.lat)
		setLongitud(coordsLocation.lng)
	}  

    const onHandleSubmit =()=>{
	    
		dispatch(saveInfo(tecnica,cultivo,image,solucionPh,solucionEc,latitud,longitud))
		// eslint-disable-next-line react/prop-types
		navigation.goBack()
	}

	const validartext = ()=>{
		if(cultivo.length<2){
			setErrorC(true)
		} else{ setErrorC(false)}
	}


   
	return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
			<Text style={styles.etiqueta}>Tecnica de Cultivo</Text>
		
			<SelectDropdown
			
				data={tcultivo}
				onSelect={(selectedItem, index) => {
					setTecnica(selectedItem)
				}}
				
				defaultButtonText={'Seleccione Tecnica'}
				buttonTextAfterSelection={(selectedItem, index) => {
					return selectedItem
				}}
				rowTextForSelection={(item, index) => {
					
					return item
				}}
				renderDropdownIcon={isOpened => {
					return <Ionicons 
					name={isOpened ? 'arrow-down' : 'arrow-down-circle'}
					 color={colors.black} 
					 size={18} 
					 />;
				  }}
				dropdownIconPosition={'right'}
				buttonStyle={styles.dropdownStyle}
				buttonTextStyle={styles.dropdownTxtStyle}
				rowStyle={styles.dropdownRowStyle}
				rowTextStyle={styles.dropdownRowTxtStyle}
				/>
		  

			<Text style={styles.etiqueta}>Cultivo</Text>
			<TextInput 
				 style={styles.input}
				 placeholder="tipo cultivo"
				 onChangeText={(cultivo)=>setCultivo(cultivo)}
				 value={cultivo}
				 onBlur={validartext}
			/>
			 <Text style={styles.messageError}>{errorC ? 'Ingrese un cultivo' :''}</Text>



			<Text style={styles.etiqueta}>Medicion de PH</Text>
			<TextInput 
				 style={styles.input}
				 placeholder="ingrese valor PH"
				 onChangeText={(solucionPh)=>setSolucionPh(solucionPh)}
				 value={solucionPh}
				 keyboardType='numeric'
			/>
			
			<Text style={styles.etiqueta}>Medicion de ElectroConductividad</Text>
			<TextInput 
				 style={styles.input}
				 placeholder="ingrese valor ElectroConductividad"
				 onChangeText={(solucionEc)=>setsolucionEc(solucionEc)}
				 value={solucionEc}
				 keyboardType='numeric'
			/>
			<ImageFrame onImage={onHandlerImage}/>
			
			<LocationFrame onLocation={onHandleLocation} />

			
			{tecnica && cultivo && image &&(
			<Button title="Guardar Info" onPress={onHandleSubmit} color={colors.primary} />
			
			)}
		</View>
		</ScrollView>
	)
}

export default NuevoInfoScreen
