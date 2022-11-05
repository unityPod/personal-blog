import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from ".";

interface modeState {
    value: string
}
const initialState: modeState = {
    value: "light"
}

export const modeSlice = createSlice({
    name: "mode",
    initialState, 
    reducers: {
        switchTo: (state: modeState, mode: PayloadAction<string>) => {
            state.value = mode.payload
        }
    }
})

export const {
    switchTo
} = modeSlice.actions


export const getMode = (state: RootState) => state.mode.value; 
export default modeSlice.reducer