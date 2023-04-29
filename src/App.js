import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Fav from './pages/Fav'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

const App = () => {
  // const navigate = useNavigate()
  // const handleButtonClick = (route) => {
  //   navigate(route)
  // }

  return (
    <>
    <div id="app">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/fav' element={<Fav/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/*' element={<NotFound/>}/>
        {/* <Route index element={<BookList />}/>
        <Route path=":id" element={<Book />}/>
        <Route path="new" element={<NewBook />}/> */}
    </Routes>
    </div>
    </>

  )
}

export default App
