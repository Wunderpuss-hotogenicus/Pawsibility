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
        setUsername('')
        setPassword('')
      })
  }

  return (
   <div className='login_div'>
    Log In
    <form className= 'login_form' onSubmit={handleSubmit}>
      <label>
        <input type="text" value={username} id='loginUsername' placeholder = 'Username' onChange={handleUsernameChange} />
      </label>
      <label>
        <input type="password" value={password} id='loginPassword' placeholder = 'Password' onChange={handlePasswordChange} />
      </label>
      <button type="submit" className='login_btn login'>Login</button>
    </form>
   </div>
  )
}

export default Login
