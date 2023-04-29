import React, { useState } from 'react'
import axios from 'axios'
const Signup = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  function handleClick (e) {
    e.preventDefault()
    console.log(username, password)
    axios.post('/api/signup', {
      username,
      password
    })
  }
  return (
    <div id='signup'>
      <form
      onSubmit={handleClick}
      >
        <label htmlFor="signupUsername">Username</label>
        <input
        type="text"
        id='signupUsername'
        required
        onChange={e => {
          setUsername(e.target.value)
        }}
         />
        <label htmlFor="signupPassword">Password</label>
        <input
        type="text"
        id='signupPassword'
        required
        onChange={e => {
          setPassword(e.target.value)
        }}
         />
         <input
         type="submit"
         value={'Submit'}
        />
      </form>
    </div>
  )
}

export default Signup
