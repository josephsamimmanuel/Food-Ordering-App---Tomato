Redux is used for State Management : A JS library for predictable and maintainable global state management
Redux is a librrary
Zustand

React-Redux
Official React bindings for Redux
-----------------------------------------------------------------------------------------------------------
Redux Toolkit
The official, opinionated, batteries-included toolset for efficient Redux development
-----------------------------------------------------------------------------------------------------------
Install Libraries
    -  Install @reduxjs/toolkit and react-redux
     npm install @reduxjs/toolkit
     npm install react-redux

    - Build Our store

    - Connect our store to App

    - Create a Slice (Cart Slice)

    - Dispatch an Action

    - Selector
-----------------------------------------------------------------------------------------------------------
App Store:     appStore.js

import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

const appStore=configureStore(
    // Slices
    {
        reducer:{
            cart: cartReducer,                      // Big reducer
            user: userReducer
        },
    }
)

export default appStore
-----------------------------------------------------------------------------------------------------------
Card Slice:    cardSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state)=>{
            state.items.pop()
        },
        clearItem: (state)=>{
            state.items.length=0
        },
    },
})
                                                                           actions: {
                                                                           addItem
export const {addItem,removeItem,clearItem}=cartSlice.actions              removeItem
                                                                           clearItem
export default cartSlice.reducer                                           }
                                                                           reducer
-----------------------------------------------------------------------------------------------------------
onclick={handleAddItem}
onclick={()=>handleAddItem(item)}       // CallBack Function
onclick={(handleAddItem(item))}         // Calling a function
fixed top-0 left-0 w-full bg-white z-40

echo "# Food-Ordering-App---Tomato" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/josephsamimmanuel/Food-Ordering-App---Tomato.git
git push -u origin main