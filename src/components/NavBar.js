import React from 'react'
import { useNavigate } from 'react-router'
const NavBar = () => {
  const navigate = useNavigate()
  const handleButtonClick = route => {
    navigate(route)
  }
  return (
    <div>
      <button onClick={() => handleButtonClick('/')}>Home</button>
      <button onClick={() => handleButtonClick('/signup/')}>Signup</button>
      <button onClick={() => handleButtonClick('/login/')}>Login</button>
    </div>
  )
}

export default NavBar
