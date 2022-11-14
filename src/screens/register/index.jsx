import React,{useState} from 'react'
import { Text, View,TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { registroUser } from '../../store/auth.slice'
import { validateInput } from '../../utils/validations'
import { styles } from './styles'

// eslint-disable-next-line react/prop-types
const RegisterScreen = ({navigation}) => {

   const [nombre, setNombre] = useState('') 
   const [email, setEmail] = useState('')
   const [clave, setClave] =useState('') 
   const [habiliN, setHabiliN] = useState(false)
   const [habiliE, setHabiliE] = useState(false)
   const [habiliC, setHabiliC] = useState(false)
   const [habili, setHabili] = useState(false)
    const [errorE, setErrorE] = useState(false)
    const [errorC, setErrorC] = useState(false)
    const [errorN, setErrorN] = useState(false)

    const [messageEN, setMessageEN] = useState('')
    const [messageEE, setMessageEE] = useState('')
    const [messageEC, setMessageEC] = useState('')


   const dispatch = useDispatch()


   const verificarVali =()=>{
      validarclave()
      validaremail()
      validarnombre()
      if(habiliE && habiliN && habiliC){
         setHabili(true)
      }else{
         setHabili(false)
      }
   }
   const registraruser =()=>{
      verificarVali()
      if(!errorC && !errorE && !errorN && habili){
      dispatch(registroUser(nombre,email,clave))
  }
 }

  const validaremail =()=>{
      
   const {hasError, error} = validateInput('email', email)
   if (hasError){
      setErrorE(true)
      setMessageEE(error)
      setHabiliE(false)
   }else{
      setErrorE(false)
      setHabiliE(true)
   }
}
 const validarclave =()=>{
      
      const {hasError, error} = validateInput('password', clave)
      if (hasError){
         setErrorC(true)
         setMessageEC(error)
         setHabiliC(false)
      }else{
         setErrorC(false)
         setHabiliC(true)
      }
 }

 const validarnombre =()=>{
      
   const {hasError, error} = validateInput('nombre', nombre)
   if (hasError){
      setErrorN(true)
      setMessageEN(error)
      setHabiliN(false)
   }else{
      setErrorN(false)
      setHabiliN(true)
   }
}


  return (
    <KeyboardAvoidingView style={styles.containerKeyboard}>
       <View style={styles.container}>
        
        <Text style={styles.title}>Registro Usuario</Text>
        
        <Text style={styles.label}>Nombre</Text>
        <TextInput 
            style={styles.input}
            placeholder='Nombre y Apellido'
            autoCorrect={false}
            onChangeText={(text)=>setNombre(text)}
            onBlur={validarnombre}
         />
         <Text style={styles.messageError}>{errorN ? messageEN :''}</Text>

        <Text style={styles.label}>Correo Electronico</Text>
        
        <TextInput 
            style={styles.input}
            placeholder='Ingresa tu email'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(text)=>setEmail(text)}
            onBlur={validaremail}
         />
         <Text style={styles.messageError}>{errorE ? messageEE :''}</Text>

        <Text style={styles.label}>Contraseña</Text>
        
        <TextInput
            style={styles.input}
            placeholder='Ingrese la contraseña'
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={(text)=>setClave(text)}
            onBlur={validarclave} 
             />
         <Text style={styles.messageError}>{errorC ? messageEC :''}</Text>
 
         
         <View style={styles.register}>
            <TouchableOpacity
               style={styles.registerbottom} 
               onPress={registraruser}
            >
               <Text style={styles.textbottom_r}>Registrar</Text>
            </TouchableOpacity>
         </View>

         <View style={styles.register}>
            <TouchableOpacity
               style={styles.registerbottom} 
               // eslint-disable-next-line react/prop-types
               onPress={()=>navigation.navigate('login')}
            >
               <Text style={styles.textbottom_r}>Volver al Login</Text>
            </TouchableOpacity>
         </View>
      
      </View>


    </KeyboardAvoidingView>
  )
}

export default RegisterScreen