import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import { HomeScreen } from '../screens'
import { isAndroid } from '../utils/functions'
import colors from '../utils/colors'

const stack = createNativeStackNavigator()

const HomeNav = () => {
  return (
    <stack.Navigator
        initialRouteName='home'
        screenOptions={{
          title:'Hidroponia Home',
          headerStyle: {
            backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTitleStyle: {
          fontFamily: 'Lato-Bold'  },
      }}
    >
        <stack.Screen
            name='home'
            component={HomeScreen}
        />
    </stack.Navigator>
  )
}

export default HomeNav