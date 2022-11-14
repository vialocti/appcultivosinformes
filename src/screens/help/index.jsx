import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

// eslint-disable-next-line react/prop-types
const HelpScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.contentTitle}>
          <Text style={styles.title}>Uso de la App</Text>
      </View >
      
      <View style={styles.contentsubTitle}>
        <Text style={styles.subTitle}>Proposito</Text>
         <Text style={styles.tips}>Almacenar Informacion de Cultivos Hidroponicos</Text>
         <Text style={styles.tips}>Controlar el proceso de Crecimiento</Text>
         <Text style={styles.tips}>Ayuda a toma de desiciones mas adecuadas </Text>
         <Text style={styles.tips}>Llevar un historico de los diferentes cultivos</Text>

      </View>

      <View style={styles.contentsubTitle}>
        <Text style={styles.subTitle}>Uso de la App</Text>
        <Text style={styles.tips}>En la parte inferior de la pantalla accede a diferentes opciones</Text>
        <Text style={styles.tips}>Home, Tips y Help e Informes </Text>
        
      </View>

      <View style={styles.contentsubTitle}>
        <Text style={styles.subTitle}>Informes</Text>
        <Text style={styles.tips}>Nos dirigimos a Informes</Text>
        <Text style={styles.tips}>Nos muestra listado de informes Almacenados</Text>
        <Text style={styles.tips}>Con el icono + agregamps un nuevo informe</Text>
        <Text style={styles.tips}>Presionando un info elegido vamos a la pantalla de detalle</Text>
        
      </View>

      <View style={styles.contentsubTitle}>
        <Text style={styles.subTitle}>Tips</Text>
        <Text style={styles.tips}>Pulsando el boton ir a Tips vamos a ver algunos datos utiles</Text>
        <TouchableOpacity
        // eslint-disable-next-line react/prop-types
        onPress={()=>navigation.navigate('tipsh')}
        style={styles.bottomT}
        >
          <Text style={styles.bottomtitle}> ir a Tips</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

export default HelpScreen