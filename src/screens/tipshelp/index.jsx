import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './styles'

const TipsHelpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.contentTitle}>
          <Text style={styles.title}>Datos Utiles</Text>
      </View >
      
      <View style={styles.contentsubTitle}>
        <Text style={styles.subTitle}>Ph: Acidez o la Alacalinidad de la Solución</Text>
         <Text style={styles.tips}>La escala es de 0(acida) a 14(alcalina) - 7(neutro)</Text>
         <Text style={styles.tips}>Valores deseables 4,8 a 6,4</Text>
         <Text style={styles.tips}>Los valores pueden variar por el cultivo</Text>
         <Text style={styles.tips}>Corriga el PH con productos comerciales</Text>

      </View>

      <View style={styles.contentsubTitle}>
        <Text style={styles.subTitle}>EC: Conductividad Electrica de la Solucion</Text>
        <Text style={styles.tips}>Nos indica la concentracion de las sales disueltas</Text>
        <Text style={styles.tips}>Medida en mS/cm (milisiemens por centímetro) </Text>
        <Text style={styles.tips}>En la hidroponía tiene su importancia en la asimilación de los nutrientes para plantas </Text>
        <Text style={styles.tips}>Valores tipico de 1 a 3</Text>
        <Text style={styles.tips}>A medida que la planta crece aumentar este valor</Text>
      </View>

      <View style={styles.contentsubTitle}>
        <Text style={styles.subTitle}>Fotografia de La planta </Text>
        <Text style={styles.tips}>Nos mostrara segun sea el color de sus hojas informacion adicional</Text>
        <Text style={styles.tips}>Hojas nuevas y amarillas(falta hierro)</Text>
        <Text style={styles.tips}>Tono palido(falta magnesio</Text>
        <Text style={styles.tips}>Amarillas y marchitas(falta de Fosforo)</Text>
        <Text style={styles.tips}>Aparecen agujeritos(falta Potasio)</Text>
      </View>

      <View style={styles.contentsubTitle}>
        <Text style={styles.subTitle}>Concluciones</Text>
        <Text style={styles.tips}>La combinacion de la informacion de las mediciones realizadas mas la tecnica de cultivo y la varieda del cultivo, servira para generar las acciones necesarias </Text>
      </View>

    </ScrollView>
  )
}

export default TipsHelpScreen