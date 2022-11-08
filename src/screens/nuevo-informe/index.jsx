import React,{useState} from 'react'
import { Button, ScrollView, Text, TextInput, View } from 'react-native'
import { useDispatch} from 'react-redux'
import { LocationFrame } from '../../components'
import ImageFrame from '../../components/image-frame'
import { saveInfo } from '../../store/info.slice'
import colors from '../../utils/colors'
import { styles } from './styles'

// eslint-disable-next-line react/prop-types
const NuevoInfoScreen = ({navigation}) => {
    
	const dispatch = useDispatch()
	const [tecnica, setTecnica] = useState('')
	const [cultivo, setCultivo] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [image, setImage] = useState(null)
    const [latitud, setLatitud] = useState()
	const [longitud,setLongitud] = useState('')
	const onHandlerImage = (imageUri) => {
		setImage(imageUri);
	  };

	const onHandleLocation = (coordsLocation)=>{
		setLatitud(coordsLocation.lat)
		setLongitud(coordsLocation.lng)
	}  

    const onHandleSubmit =()=>{
	    
		dispatch(saveInfo(tecnica,cultivo,image,latitud,longitud))
		// eslint-disable-next-line react/prop-types
		navigation.goBack()
	}



	return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
			<Text style={styles.etiqueta}>Tecnica de Cultivo</Text>
			<TextInput 
				 style={styles.input}
				 placeholder="titulo"
				 onChangeText={(tecnica)=>setTecnica(tecnica)}
				 value={tecnica}
			/>
			<Text style={styles.etiqueta}>Cultivo</Text>
			<TextInput 
				 style={styles.input}
				 placeholder="tipo cultivo"
				 onChangeText={(cultivo)=>setCultivo(cultivo)}
				 value={cultivo}
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
