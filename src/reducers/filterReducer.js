import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
const filterSclice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action){
      console.log("filter ",action)
      return action.payload
    }
  }
})
/* const filterReducer = (state = "", action) => {
  console.log("FilterReducer, state: ",state)
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
  /*   const anecdotes = useSelector(state => state.anecs)
    const byFilterField = x => {
        console.log(typeof x.name)
        return x.name.includes(filter);
      }
      
    return filter !== '' ? anecdotes.filter(byFilterField) : anecdotes 
 */

export const {setFilter} = filterSclice.actions
export default filterSclice.reducer