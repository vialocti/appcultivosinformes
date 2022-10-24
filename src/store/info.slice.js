import { createSlice } from "@reduxjs/toolkit";

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
                Date.now(),
                Date.toString(),
                action.payload.tecnica,
                action.payload.cultivo,
                action.payload.image,
            )
            
            state.informes.push(NewInfo)

            
        }
    }

})


export const {addInfo} = informeSlice.actions

export const saveInfo =(tecnica,cultivo ,image)=>{
    return async (dispatch) =>{
            
            dispatch(addInfo({tecnica,cultivo,image}))
    }
}


export default informeSlice.reducer