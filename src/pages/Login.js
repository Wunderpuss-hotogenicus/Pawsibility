import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Handle form submission logic here
    axios.post('/api/login', {
      username,
      password
    })
      .then(response => {
      // redirect to home
        
        console.log('res', response.data)
        if (response.data) {
          navigate('/main')
        } else {
          navigate('/signup')
        }
      })
      .catch(err => {
        console.log(`Username: ${username}, Password: ${password}`)
        
      })
     
  }

  return (
   <div>
    Log In
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
   </div>
  )
}

export default Login
