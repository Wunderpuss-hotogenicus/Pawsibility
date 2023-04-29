import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Settings = () => {
  const [housing, setHousing] = useState()
  const [kids, setKids] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()
  // const handleButtonClick = route => {
  //   navigate(route)
  // }
  function handleClick (e) {
    e.preventDefault()
    console.log(housing, kids, age);
    console.log(Boolean(kids));
    axios.patch('/api/form', {
      housing,
      kids,
      age
    })
    navigate('/')
    // .then(response => navigate(/home/))
  }
  return (
    <div id='settings'>
      <form
      onSubmit={handleClick}
      >
        <label htmlFor="housingQuestion">housing?</label>
        <select
        name="housingQuestion"
        id="housingChoice"
        onChange={(e) => setHousing(e.target.value)}
        >
          <option value='Apartment'>Apartment</option>
          <option value='House'>House</option>
        </select>
        <label htmlFor="kidsQuestion">kids?:</label>
        <select
        name="kidsQuestion"
        id="kidsChoice"
        onChange={(e) => setKids(e.target.value)}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label htmlFor="ageQuestion">age?</label>
        <input
        type="text"
        id='ageQuestion'
        onChange={e => {
          setAge(e.target.value)
        }}
         />
         <input
         type="submit"
         value={'Submit'}
        //  onClick={() => handleButtonClick('/main/')}
        />
      </form>
    </div>
  )
}

export default Settings
