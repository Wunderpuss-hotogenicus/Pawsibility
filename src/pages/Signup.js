import React, { useState } from 'react'
import axios from 'axios'
import '../styles/App.css'


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
        <label htmlFor="signupUsername"></label>
        <input
        type="text"
        id='signupUsername'
        placeholder='Enter a username'
        required
        onChange={e => {
          setUsername(e.target.value)
        }}
         />
        <label htmlFor="signupPassword"></label>
        <input
        type="text"
        id='signupPassword'
        placeholder='Enter a password'
        required
        onChange={e => {
          setPassword(e.target.value)
        }}
         />
         <input
         className='submit_btn'
         type="submit"
         value={'Submit'}
        />
      </form>
    </div>
  )
}

export default Signup
