import { Provider } from 'react-redux'
import './App.css'
import NavBar from './components/NavBar'
import Page from './components/Page'
import { store } from './redux/store'

function App() {

  return (
   <Provider store={store}>
   <NavBar/>
   <Page />
   </Provider>
  )
}

export default App