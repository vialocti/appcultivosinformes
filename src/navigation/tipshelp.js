import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import { HelpScreen, TipsHelpScreen } from '../screens'
import { isAndroid } from '../utils/functions'
import colors from '../utils/colors'

const stack = createNativeStackNavigator()

const TipsNav = () => {
  return (
    <stack.Navigator
        initialRouteName='help'
        screenOptions={{
          title:'informacion Adicional',
          headerStyle: {
            backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTitleStyle: {
          fontFamily: 'Lato-Bold',
      },
      }
  }
    >
        <stack.Screen
          name='help'
          component={HelpScreen}
        />
        <stack.Screen 
            name='tipsh'
            component={TipsHelpScreen}
        />
    </stack.Navigator>
  )
}

export default TipsNav