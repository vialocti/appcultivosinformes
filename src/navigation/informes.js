import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DetalleScreen, ListadoInfosScreen, NuevoInfoScreen } from '../screens'
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native'
import colors  from '../utils/colors'

const stack = createNativeStackNavigator()

const InformeNav = () => {
	return (
		<stack.Navigator initialRouteName="listado">
			<stack.Screen 
                name="informes" 
                component={ListadoInfosScreen}
                 options={({navigation})=>({
                    title:'Listado Informes',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('nuevoInfo')}>
                          <Ionicons name='add-circle-outline' size={24} color={colors.black}/>
                        </TouchableOpacity>
                      ),
                    
                 })}
               />
			<stack.Screen name="nuevoInfo" component={NuevoInfoScreen} />

			<stack.Screen name="detalle" component={DetalleScreen} />
		</stack.Navigator>
	)
}

export default InformeNav
