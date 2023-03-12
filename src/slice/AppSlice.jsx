import { createSlice } from "@reduxjs/toolkit";



const AppSlice = createSlice({
	name: "Auth",
	initialState: {  darkMode: false,
    },
	reducers: {
		DarkModeReducer : (state, action) => {
            console.log('kmedfv', action.payload)
            if(action.payload === "LIGHT") {
                state.darkMode = false
                console.log(state.darkMode)
            }
            if(action.payload === "DARK") {
                state.darkMode = true
                console.log(state.darkMode)

            }
            if(action.payload === "TOGGLE") {
                state.darkMode = !state.darkMode
                console.log(state.darkMode)

            }
            // switch (action.payload) {
            //   case "LIGHT": 
           
            //     return  state.darkMode = false          
            //   case "DARK": 
           

            //     return  state.darkMode = true      
            //   case "TOGGLE": 
            //     return state.darkMode = !state.darkMode
             
            //   break;
            // }
          }
	}
});

export const { DarkModeReducer } =	AppSlice.actions;
export default AppSlice.reducer;
