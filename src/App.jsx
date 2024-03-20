import { useSelector, useDispatch } from 'react-redux'
import {vote} from './reducers/actionReducer'
import NewAnec from './components/newAnec'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote_for = (id) => {
    console.log('vote', id)
    dispatch(vote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
    <NewAnec />
    </div>
  )
}

export default App