import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleClick = e => {
    e.preventDefault()
    axios.post('/api/signup', {
      username,
      password
    })
      .then(response => {
        console.log('res', response.data)
        navigate('/settings/')
      })
      .catch(err => {
        console.log(`Username: ${username}, Password: ${password}`)
        setUsername('')
        setPassword('')
      })
  }
  //   axios.post('/api/signup', {
  //     username,
  //     password
  //   })

  //   navigate('/settings/')
  // }

  return (
    <div id='signup'>
      SIGN UP
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
        type="password"
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
