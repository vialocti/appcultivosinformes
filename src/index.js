import React from 'react'
import AppNavigator from './navigation'
import {Provider} from 'react-redux'
import {store} from './store'
import { init } from './db'


init()
.then(()=>{
	console.log('DB Iniciada')
})
.catch(()=>{
	console.log('DB Fallo')
})
const App = () => {
	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	)
}

export default App
