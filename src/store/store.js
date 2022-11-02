import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'kim'
})
let stock = createSlice({
    name : 'user',
    initialState : [10, 11, 12]
})



export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
  }
}) 