import { Provider } from 'react-redux'
import './App.css'
import NavBar from './components/NavBar'
import Page from './components/Page'


function App() {

  return (
    <Provider>
    <NavBar/>
    <Page/>
    </Provider>

  )
}

export default App
