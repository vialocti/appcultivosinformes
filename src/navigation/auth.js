import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, RegisterScreen } from '../screens'


const stack = createNativeStackNavigator()
const AuthNav = () => {

    return (
    <stack.Navigator>
        <stack.Screen
            name="login"
            component={LoginScreen}
        />
        <stack.Screen
            name="register"
            component={RegisterScreen}
        />
    </stack.Navigator>
  )
}

export default AuthNav