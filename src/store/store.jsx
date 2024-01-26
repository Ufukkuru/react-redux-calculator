import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from '../reducer/calculatorSlice'

export default configureStore({
    reducer:{
        calculator:calculatorReducer
    }
})