import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import InformeNav from './informes'
import AuthNav from './auth'
import { useSelector } from 'react-redux'
import TabsNavigation from './tabsapp'

const AppNavigator = () => {

	const userlog = useSelector((state)=>state.authuser.loginUser)
	
	return (
		<NavigationContainer>
          
		    {userlog?
		  		<TabsNavigation />
		    :
				<AuthNav />
			}
		</NavigationContainer>
	)
}

export default AppNavigator
