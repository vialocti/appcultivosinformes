import { createSlice } from "@reduxjs/toolkit";
import { insertInforme,getInformes } from "../db";

import Informe from "../models/informe";




const initialState={
    informes:[],
}

const informeSlice=createSlice({
    name:'informe',
    initialState,
    reducers:{
        addInfo :(state, action)=>{
            const NewInfo = new Informe(
                action.payload.id,
                action.payload.tecnica,
                action.payload.cultivo,
                action.payload.image,
                action.payload.location,
            )
            
            state.informes.push(NewInfo)

            
        },
        
        setInforms:(state,action)=>{
        state.informes=action.payload
        },
    }

    

})


export const {addInfo,setInforms} = informeSlice.actions

export const saveInfo =(tecnica,cultivo ,image, location)=>{
    return async (dispatch) =>{
            try {
                
                const result = await insertInforme(tecnica,cultivo ,image, location)
                
                dispatch(addInfo({id:result.insertId, tecnica, cultivo, image, location}))    
            } catch (error) {
                console.log(error)
                throw error
            }
            
    }
}

export const loadInforms = ()=>{
    return async (dispatch) =>{

            try {
                const result = await getInformes()
                dispatch(setInforms(result?.rows?._array))
            } catch (error) {
                console.log(error)
                
            }
    }
}




export default informeSlice.reducer