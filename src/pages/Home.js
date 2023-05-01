import React from 'react'
import NavBar from '../components/NavBar'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='home_container'>
      <h1 className='logo'><motion.span style={{color: 'black'}} animate={{color:'#c41616c7'}} transition={{duration: 1}}>Paws</motion.span>ibility</h1>
      <h4 className='slogan'>CREATING ENDLESS POSSIBILIES FOR RESCUED DOGS AND THEIR FOREVER HOMES</h4>
      <NavBar/>
    </div>
  )
}

export default Home
