import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Settings = () => {
  const [housing, setHousing] = useState()
  const [kids, setKids] = useState()
  // const [age, setAge] = useState()
  const [cats, setCats] = useState()
  const [dogs, setDogs] = useState()

  const navigate = useNavigate()
  function handleClick (e) {
    e.preventDefault()
    console.log(housing, kids, cats, dogs)
    console.log(Boolean(kids))
    axios.patch('/api/form', {
      housing,
      kids,
      cats,
      dogs
    })
    navigate('/Main')
  }
  return (
    <div id='settings'>
      <form
      onSubmit={handleClick}
      >
        <label htmlFor="housingQuestion">Do you live in a house or apartment?</label>
        <select
        name="housingQuestion"
        id="housingChoice"
        onChange={(e) => setHousing(e.target.value)}
        >
          <option></option>
          <option value='Apartment'>Apartment</option>
          <option value='House'>House</option>
        </select>

        <label htmlFor="kidsQuestion">Do you have any kids?</label>
        <select
        name="kidsQuestion"
        id="kidsChoice"
        onChange={(e) => setKids(e.target.value)}>
          <option></option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <label htmlFor="catsQuestion">Do you have any cats?</label>
        <select
        name="catsQuestion"
        id="catsChoice"
        onChange={(e) => setCats(e.target.value)}>
          <option></option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <label htmlFor="dogsQuestion">Do you have any dogs?</label>
        <select
        name="dogsQuestion"
        id="dogsChoice"
        onChange={(e) => setDogs(e.target.value)}>
          <option></option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

         <input
         type="submit"
         value={'Submit'}
        />
      </form>
    </div>
  )
}

export default Settings