import axios from 'axios'
import React, { useState } from 'react'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      //redirect to home
      console.log(data);

      })
    .catch(err => 
        console.log(`Username: ${username}, Password: ${password}`);
        setUsername('');
        setPassword('')
    })   
 }
  
  
  return (
   <div>
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
