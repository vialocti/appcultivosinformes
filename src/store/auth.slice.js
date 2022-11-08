import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    UserId:false,
}
const authSlice = createSlice({
    name:'authuser',
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            action.payload=state.loginUser=true
        }
    },
})


export const {loginUser} = authSlice.actions

export default authSlice.reducer