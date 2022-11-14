import React,{useState,useEffect} from 'react'
import { View,Text,TextInput ,TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import { useDispatch} from 'react-redux'
import { existeUser, logoutUser } from '../../store/auth.slice'
import { styles } from './styles'
import {validateInput} from '../../utils/validations'


// eslint-disable-next-line react/prop-types
const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [clave, setClave] = useState('')
    const [errorE, setErrorE] = useState(false)
    const [errorC, setErrorC] = useState(false)
    const [messageEE, setMessageEE] = useState('')
    const [messageEC, setMessageEC] = useState('')

    const dispatch = useDispatch()
    
   useEffect(()=>{
      
      dispatch(logoutUser())
      
   },[])


    const loginApp =()=>{
    
      if(!errorC && !errorE){
      dispatch(existeUser(email,clave))
      }else{
         Alert.alert('verifique los datos')
      }    
    }

    const irRegistro=()=>{
      // eslint-disable-next-line react/prop-types
      navigation.navigate("register")
    }
    
    const validaremail =()=>{
      
      const {hasError, error} = validateInput('email', email)
      if (hasError){
         setErrorE(true)
         setMessageEE(error)
      }else{setErrorE(false)}
 }
    const validarclave =()=>{
         
         const {hasError, error} = validateInput('password', clave)
         if (hasError){
            setErrorC(true)
            setMessageEC(error)
         }else{setErrorC(false)}
    }
    return (
    <KeyboardAvoidingView style={styles.containerKeyboard}>
       <View style={styles.container}>
        
        <Text style={styles.title}>Login App</Text>
        

        <Text style={styles.label}>Correo Electronico</Text>    
        <TextInput 
            style={styles.input}
            placeholder='Ingresa tu email'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={(text)=>setEmail(text)}
            onBlur={validaremail}
         />
         <Text style={styles.messageError}>{errorE ? messageEE :''}</Text>

       
         <Text style={styles.label}>Contraseña</Text>
        <TextInput    
            style={styles.input}       
            placeholder='Ingrese la contraseña'
            value={clave}
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={(text)=>setClave(text)}
            onBlur={validarclave}
             />
             <Text style={styles.messageError}>{errorC ? messageEC :''}</Text>
 
         <View style={styles.containerbtn}> 
            <TouchableOpacity
               style={styles.bottomlogin}
               onPress={loginApp}
               >
               <Text style={styles.textbottom_l}>Iniciar Sesion</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.register}>
            <TouchableOpacity
               style={styles.registerbottom} 
               onPress={irRegistro}
            >
               <Text style={styles.textbottom_r}>Si no tiene cuenta Registrese</Text>
            </TouchableOpacity>
         </View>
      
      </View>


    </KeyboardAvoidingView>
  )
}

export default LoginScreen