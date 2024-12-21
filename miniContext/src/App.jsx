import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
 
  return (
    <UserContextProvider>
     <h1>Chai is important</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
