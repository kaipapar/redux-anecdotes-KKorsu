import NewAnec from './components/newAnec'
import AnecList from './components/AnecList'
import Filter from './components/Filter'
import Notification from './components/Notification'
const App = () => {

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