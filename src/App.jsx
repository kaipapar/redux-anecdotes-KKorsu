
import { useEffect } from 'react'
import NewAnec from './components/newAnec'
import AnecList from './components/AnecList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { setAnecs } from './reducers/anecdoteReducer'
import anecService from './services/anecdotes'
import { useDispatch } from 'react-redux'
import { initializeAnecs } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecs())
  }, [])
  
  return (
    <div>
    <h2>Anecdotes</h2>
      <Notification />
      <NewAnec />
      <Filter />
      <AnecList />
    </div>
  )
}

export default App