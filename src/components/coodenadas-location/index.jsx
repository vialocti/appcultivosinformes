import React, {useState } from 'react'
import * as Location from 'expo-location'

import {styles} from './styles'
import {Alert,Button, Text, View } from 'react-native'

// eslint-disable-next-line react/prop-types
const LocationFrame = ({onLocation}) => {
    const [pickedLocation, setPickedLocation] = useState('');
   

  const verificarPermisos = async()=>{
        const {status} = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted'){
            Alert.alert('No tiene permiso para usar el localizador')
            return false
        }
        return true
  }

  const onHandleGetLocation =async ()=>{
        const tienePermiso = await verificarPermisos()
        
        if (!tienePermiso) return false
         
        const location = await Location.getCurrentPositionAsync({ 
            timeout:5000,
            accuracy:Location.Accuracy.Low,
        })
        
       
        setPickedLocation({
            lat : location.coords.latitude,
            lng : location.coords.longitude
        })
        
        onLocation ({
            lat : location.coords.latitude,
            lng : location.coords.longitude
        })
       

  }

  return (
    <View style={styles.container}>
        
        {!pickedLocation?(
            <Text> Sin Localizacion Obtenido</Text>
            ):(<View>        
               <Text>Latitud:{pickedLocation.lat}</Text>
        
                <Text>Longitud:{pickedLocation.lng}</Text>
            </View>)}

        <Button 
            title='Obtener Localizacion'
            onPress={onHandleGetLocation}

        />
    </View>
  )
}

export default LocationFrame