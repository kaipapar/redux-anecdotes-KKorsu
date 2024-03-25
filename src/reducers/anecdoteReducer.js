import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
const anecSlice = createSlice({
  name: 'anecs',
  initialState,
  reducers: {
    newAnec(state, action){
      console.log("new ",action)
      state.push(asObject(action.payload))},
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
    }
    }
  })

/* const anecReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type){
    case 'NEW_ANECDOTE':
      const new_anec = asObject(action.payload.content)
      return state.concat(new_anec)
    case 'VOTE':
      const id = action.payload.id
      const anecToChange = state.find(n => n.id === id)
      const changedAnec = {
        ...anecToChange, 
        votes: anecToChange.votes ? anecToChange.votes + 1 : 1
      }
      return state.map(anec => 
        anec.id !== id ? anec : changedAnec)
    default:
      return state
  }
} */



export const { newAnec, vote } = anecSlice.actions
export default anecSlice.reducer