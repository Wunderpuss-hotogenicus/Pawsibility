import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
<<<<<<< HEAD
import '../styles/App.css'

=======
>>>>>>> dev

const Signup = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleButtonClick = route => {
    navigate(route)
  }
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
         onClick={() => handleButtonClick('/settings/')}
        />
      </form>
    </div>
  )
}

export default Signup
