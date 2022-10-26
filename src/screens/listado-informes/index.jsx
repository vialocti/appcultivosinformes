import React, { useEffect } from 'react'
import { FlatList} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { InformeItem } from '../../components'
import { loadInforms } from '../../store/info.slice'
// import { styles } from './styles'




// eslint-disable-next-line react/prop-types
const ListadoInfosScreen = ({navigation}) => {
    const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(loadInforms())
	},[dispatch])

    const informes = useSelector((state)=>state.info.informes)
    

	const renderItem =({item})=>(
		
	   <InformeItem
		{...item}

			// eslint-disable-next-line react/prop-types
			onSelected ={()=>navigation.navigate("detalle",{infoId:item.id})}
		/>
	)

	
	return (
		<FlatList 
			data={informes}
			renderItem={renderItem}
			keyExtractor={item => item.id.toString()}
		/>		
	)
}

export default ListadoInfosScreen
