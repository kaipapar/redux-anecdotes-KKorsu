import { createSlice } from '@reduxjs/toolkit'
import anecService from '../services/anecdotes'
import {setNotif, clearNotif} from '../reducers/notificationReducer'


const anecSlice = createSlice({
  name: 'anecs',
  initialState: [],
  reducers: {
    vote(state,action){
      console.log("action ",action)
      const id = action.payload
      const anecToChange = state.find(n => n.id === id)
      console.log("to change: ", anecToChange)
      const changedAnec = {
        ...anecToChange, 
        votes: anecToChange.votes + 1
      }
      return state.map(anec => 
        anec.id !== id ? anec : changedAnec)
    },
    appendAnec(state, action) {
      state.push(action.payload)
    },
    setAnecs(state,action) {
      return action.payload
    }
    }
  })

export const { vote, appendAnec, setAnecs } = anecSlice.actions

export const initializeAnecs = () => {
  return async dispatch => {
    const anecs = await anecService.getAll()
    dispatch(setAnecs(anecs))
  }
}

export const createAnec = content => {
  return async dispatch => {
    const anec = await anecService.createNew(content)
    dispatch(appendAnec(anec))
    dispatch(setNotif(`You created: ${anec}`))
    setTimeout(() => dispatch(clearNotif()),5000) 
  }
}

export const saveVote = id => {
  return async dispatch => {
    
  }
}

export default anecSlice.reducer