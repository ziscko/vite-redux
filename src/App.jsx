import { useEffect } from 'react'
import { Users } from './components/Users'
import { Email } from './components/Email'
import './App.css'
import { useDispatch } from 'react-redux'
import { addUser } from './redux/userSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
  })

  return (
    <div className="App">
      <Users />
      <Email />
    </div>
  )
}

export default App
