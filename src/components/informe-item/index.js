import React from 'react'
import { Image, Text, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'

// eslint-disable-next-line react/prop-types
const InformeItem = ({id,tecnica, cultivo, imagen, onSelected}) => {
    
  return (
    <TouchableOpacity
    style={styles.container} 
    onPress={onSelected}>
      
      <Image style={styles.image} source={{uri:imagen}} />
      <View style={styles.info}>
        <Text style={styles.title}>Tecnica Cultivo: {tecnica}</Text>
        <Text style={styles.title}>Cultivo: {cultivo}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default InformeItem