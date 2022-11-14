import { createSlice } from "@reduxjs/toolkit";
import { registrarUser, buscarUser } from "../db";
import User from "../models/users";


const initialState ={
    loginUser:false,
    existeUser:0,
    users:[],
}
const authSlice = createSlice({
    name:'authuser',
    initialState,
    reducers:{

        loginUser:(state,action)=>{
            state.existeUser=action.payload
            
            if (state.existeUser > 0){
                action.payload=state.loginUser=true
            }else{
                action.payload=state.loginUser=false
            }
        },
        logoutUser:(state,action)=>{
           action.payload=state.loginUser=false
        },
        
        regUser:(state,action)=>{
            const userNew = new User(
                action.payload.id,
                action.payload.nombre,
                action.payload.email,
                action.payload.clave
            )   
            state.users.push(userNew)
            state.loginUser=true
        },

    },
})


export const {loginUser,logoutUser, regUser} = authSlice.actions

export const registroUser =(nombre,email,clave)=>{
    return async(dispatch)=>{
        
        try {
            const result = await registrarUser(nombre,email,clave)
            dispatch(regUser({id:result.insertId,nombre,email,clave})) 
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export const existeUser =(email,clave)=>{
    
    return async (dispatch) =>{
        try {
            
           
            
                // eslint-disable-next-line no-unused-vars
            const result = await buscarUser(email,clave)
            
           
            // eslint-disable-next-line no-undef
            dispatch(loginUser(result.rows._array[0].id))
        } catch (error) {
            
        }
    }
}

export default authSlice.reducer