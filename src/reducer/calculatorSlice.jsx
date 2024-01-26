import { createSlice } from "@reduxjs/toolkit";


export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState:{
        input:'',
        value:0
    },
    reducers:{
       oneNumber:(state,action)=>{
            state.input = state.input + action.payload.toString()
        },
        twoNumber:(state,action)=>{
            state.input = state.input + action.payload.toString()
        },
        threeNumber:(state,action)=>{
            state.input = state.input + action.payload.toString()
        },
        fourNumber:(state,action)=>{
            state.input = state.input + action.payload.toString()
        },
        fiveNumber:(state,action)=>{
            state.input = state.input + action.payload.toString()
        },
        sixNumber:(state,action)=>{
            state.input = state.input + action.payload.toString()
        },
        sevenNumber:(state,action)=>{
            state.input = state.input + action.payload.toString()
        },
        eightNumber:(state,action)=>{
            state.input = state.input + action.payload.toString()
        },
        nineNumber:(state,action)=>{
            state.input = state.input + action.payload.toString()
        },
        zeroNumber:(state,action)=>{
            state.input = state.input + action.payload.toString()
        },
        plus:(state)=>{
            state.input += '+'
        },
        minus:(state)=>{
            state.input += '-'
        },
        impact:(state)=>{
            state.input += '*'
        },
        divide:(state)=>{
            state.input += '/'
        },
        percentage: (state) => {
            try {
              const result = eval(state.input);
              const percentageResult = result * 0.10;
              state.input = percentageResult.toString();
            } catch (error) {
              state.input = "";
              state.value = 0;
            }
          },
        deletes:(state)=>{
            state.input = state.input.slice(0, -1)
        },
        comma:(state)=>{
            state.input += ','
        },
        clear:(state)=>{
            state.input = ''
        },
        equal: (state) => {
            try {
              state.value = eval(state.input);
              state.input = state.value.toString();
            } catch (error) {
              state.input = "";
              state.value = 0;
            }
          },
    }
})

export const {oneNumber, twoNumber , threeNumber , fourNumber , fiveNumber , sixNumber , sevenNumber , eightNumber , nineNumber , zeroNumber , plus , minus , impact , divide ,percentage , deletes , comma  , clear , equal} = calculatorSlice.actions
export default calculatorSlice.reducer