import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import InformeNav from './informes'
import AuthNav from './auth'
import { useSelector } from 'react-redux'

const AppNavigator = () => {
	const userlog = useSelector(state=>state.auth.userId)
	return (
		<NavigationContainer>
          
		    {userlog?
		  		<InformeNav />
		    :
				<AuthNav />
			}
		</NavigationContainer>
	)
}

export default AppNavigator
