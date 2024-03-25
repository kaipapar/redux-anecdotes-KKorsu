import { configureStore } from '@reduxjs/toolkit'
import anecReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

export const store = configureStore( {
    reducer: {
    anecs: anecReducer,
    filter: filterReducer
  }})

export default store
