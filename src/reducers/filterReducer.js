

const filterReducer = (state = "", action) => {
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
      
    return filter !== '' ? anecdotes.filter(byFilterField) : anecdotes */
}

export default filterReducer