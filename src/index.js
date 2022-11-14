import React from 'react'
import AppNavigator from './navigation'
import {Provider} from 'react-redux'
import {store} from './store'
import { init } from './db'
import { ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font'



init()
.then(()=>{
	console.log('DB Iniciada')
})
.catch(()=>{
	console.log('DB Fallo')
})
const App = () => {

	const [loaded] = useFonts({
		'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
		'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
		'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
	  });
	
	  if (!loaded) {
		return <ActivityIndicator />;
	  }
	return (
		<Provider store={store}>
			<AppNavigator/>
		</Provider>
	)
}

export default App
