import { configureStore } from '@reduxjs/toolkit'
import anecReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notifRefucer from './reducers/notificationReducer'

export const store = configureStore( {
    reducer: {
    anecs: anecReducer,
    filter: filterReducer,
    notification: notifRefucer
  }})

export default store
