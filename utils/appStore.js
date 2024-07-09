// store
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

const appStore=configureStore(
    // Slices
    {
        reducer:{
            cart: cartReducer,                      // Big reducer
        },
    }
)

export default appStore