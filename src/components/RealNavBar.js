import React from 'react'
import { useNavigate } from 'react-router'
const RealNavBar = () => {
  const navigate = useNavigate()
  const handleButtonClick = route => {
    navigate(route)
  }

  const redirectToExternalWebsite = () => {
    const url = 'https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googlenonbrandbroad&initialms=MP_PMK_Googlenonbrandbroad&pcode=WPSP2GO2PK01&lpcode=WPSP2GO1PK01&test&gad=1&gclid=EAIaIQobChMI4J2v3LXU_gIVU83jBx2GNQAkEAAYASAAEgJyQPD_BwE&gclsrc=aw.ds'
    window.open(url)
  }

  return (
    <div className='button_container'>
      {/* <button onClick={() => handleButtonClick('/')}>Home</button> */}
      <button className = "signup_b" onClick={() => handleButtonClick('/Main')}>Home</button>
      <button className = "login_b" onClick={() => handleButtonClick('/fav/')}>Favs</button>
      <button className = "settings_b" onClick={() => handleButtonClick('/settings/')}>Settings</button>
      <button className = "donate" onClick={redirectToExternalWebsite}>Donate</button>
    </div>
  )
}

export default RealNavBar
