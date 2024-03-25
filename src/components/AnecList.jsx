import { useSelector, useDispatch } from 'react-redux'
import {vote} from '../reducers/actionReducer'

const AnecList = () =>{
 
  const anecdotes = useSelector(state => [...state.anecs].sort((a, b) => b.votes - a.votes))
/*       {
        if (state.filter === '') {
          return [...state.anecs].sort((a, b) => b.votes - a.votes)
        } else {
          return [...state.anecs].filter(x => x.content.includes(state.filter)).sort((a, b) => b.votes - a.votes)
        }
        
      }) */
      

    const dispatch = useDispatch()

  const vote_for = (id) => {
    console.log('vote', id)
    dispatch(vote(id))
  }
  return (
    <ul>
    {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
        <div>
        {anecdote.content}
        </div>
        <div>
        has {anecdote.votes}
        <button onClick={() => vote_for(anecdote.id)}>vote</button>
        </div>
    </div>
    )}
    </ul>
)
}

export default AnecList