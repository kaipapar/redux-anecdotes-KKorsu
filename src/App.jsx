import NewAnec from './components/newAnec'
import AnecList from './components/AnecList'
import Filter from './components/Filter'
const App = () => {

  return (
    <div>
    <h2>Anecdotes</h2>
      <NewAnec />
      <Filter />
      <AnecList />
    </div>
  )
}

export default App