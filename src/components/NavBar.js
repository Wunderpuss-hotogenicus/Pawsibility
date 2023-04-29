import React from 'react'
import { useNavigate } from 'react-router'
const NavBar = () => {
  const navigate = useNavigate()
  const handleButtonClick = route => {
    navigate(route)
  }
  return (
    <div className='button_container'>
      {/* <button onClick={() => handleButtonClick('/')}>Home</button> */}
      <button className = "signup_btn" onClick={() => handleButtonClick('/signup/')}>Signup</button>
      <button className = "login_btn" onClick={() => handleButtonClick('/login/')}>Login</button>
    </div>
  )
}

export default NavBar
