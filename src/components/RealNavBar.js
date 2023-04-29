import React from 'react'
import { useNavigate } from 'react-router'
const RealNavBar = () => {
  const navigate = useNavigate()
  const handleButtonClick = route => {
    navigate(route)
  }
  return (
    <div className='button_container'>
      {/* <button onClick={() => handleButtonClick('/')}>Home</button> */}
      <button className = "signup_btn" onClick={() => handleButtonClick('/Main')}>Home</button>
      <button className = "login_btn" onClick={() => handleButtonClick('/fav/')}>Favs</button>
      <button className = "login_btn" onClick={() => handleButtonClick('/settings/')}>Settings</button>
    </div>
  )
}

export default RealNavBar
