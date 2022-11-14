import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import HomeNav from './home'
import TipsNav from './tipshelp'
import InformeNav from './informes'


const bottomTab = createBottomTabNavigator()

const TabsNavigation = () => {
  return (
    <bottomTab.Navigator
        initialRouteName='hometab'
        screenOptions={{
            headerShown: false,
        }
    }
    >
        
        <bottomTab.Screen
            name='hometab'
            component={HomeNav}
            options={{
                title:'Home',
                tabBarIcon: ({focused})=>(
                    <Ionicons
                        name={focused ? 'home' : 'home-outline'}
                        size={22}
                        color='black'
                    />
                ),

            }}

        />

        <bottomTab.Screen 
            name = 'tipsn'
            component = {TipsNav}
            
            options={{
                title:'Tips and Help',
                tabBarIcon:({focused}) =>(
                <Ionicons 
                    name={focused ? 'help' : 'help-circle-outline'}
                    size={22}
                    colors='black'
                />
                ),
            }}

        />

        <bottomTab.Screen 
            name='infonav'
            component={InformeNav}
            options={{
                title:'Informes',
                tabBarIcon:({focused})=>(
                    <Ionicons
                        name={focused ? 'information' : 'information-outline'}
                        size={22}
                        color='black'
                    />
                ),


            }}
        />
    
        
    </bottomTab.Navigator>
  )
}

export default TabsNavigation