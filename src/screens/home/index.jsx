import React from 'react'
import { Image,Text, View } from 'react-native'
import { styles } from './styles'
import image from '../../../assets/planta.png'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.title}>Cultivos Hidroponicos</Text>
      </View>
    <View style={styles.content}>
        <Text>App de generacion de Informes de estado de los cultivos</Text>
        <Image source={image} style={styles.imagen} />
        <Text>Aplicativo para control de Cultivos Hidroponicos</Text>
        
    </View>
    <View style={styles.footer}>
        
        <Text>Contacto: octavio.brizuela@cultihidro.com.ar</Text>
        <Text>Responsable Contenido: Gervasio Trentacoste Brizuela</Text>
    </View>
    </View>
  )
}

export default HomeScreen