import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store.js'
/* import anecService from './services/anecdotes'
import { setAnecs } from './reducers/anecdoteReducer.js' */


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

/* anecService.getAll().then(anecs =>
  store.dispatch(setAnecs(anecs))
)
 */