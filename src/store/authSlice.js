import { createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: true,
        userData: null,
    },

    reducers:{
        login: (state,action)=>{
                state.status = true;
                state.userData = action.payload.userData
        },
        logout: (state)=>{
            state.status = false;
            state.userData = null;
        }
        
    }
})

export default authSlice.reducer;

export const {login, logout} = authSlice.actions;
