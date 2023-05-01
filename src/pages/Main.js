import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RealNavBar from '../components/RealNavBar'

const Main = () => {
  const clientid = 'BnOiXaaLRv1CbvQeiwUrjKtQgIH2DRpTUEYXAfcSgSzFhvg1JX'
  const secretid = 'vnjIlV2ZZTwM1ykXmGV7vp67jdsqhpk5RJVOL6w4'
  // const apiUrl = `https://api.petfinder.com/v2/animals?type=dog&size=${userHousing}&good_with_children=${userKids}&good_with_cats=${userCats}&good_with_dogs=${userDogs}`
  const apiUrl = 'https://api.petfinder.com/v2/animals?type=dog&size=large'

  const [array, setResults] = useState(null)
  const [accesstoken, setAccessToken] = useState()
  const [userHousing, setUserHousing] = useState()
  const [userKids, setUserKids] = useState()
  const [userCats, setUserCats] = useState()
  const [userDogs, setUserDogs] = useState()
  const [index, setIndex] = useState(0)

  const url = new URL('https://api.petfinder.com/v2/animals')
  const params = new URLSearchParams({
    type: 'dog',
    size: userHousing,
    good_with_children: userKids,
    good_with_cats: userCats,
    good_with_dogs: userDogs
  })
  url.search = params.toString()

  const redirectToExternalWebsite = () => {
<<<<<<< HEAD
    const url = 'https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googlenonbrandbroad&initialms=MP_PMK_Googlenonbrandbroad&pcode=WPSP2GO2PK01&lpcode=WPSP2GO1PK01&test&gad=1&gclid=EAIaIQobChMI4J2v3LXU_gIVU83jBx2GNQAkEAAYASAAEgJyQPD_BwE&gclsrc=aw.ds';
    window.open(url);
  };
=======
    const url = 'https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googlenonbrandbroad&initialms=MP_PMK_Googlenonbrandbroad&pcode=WPSP2GO2PK01&lpcode=WPSP2GO1PK01&test&gad=1&gclid=EAIaIQobChMI4J2v3LXU_gIVU83jBx2GNQAkEAAYASAAEgJyQPD_BwE&gclsrc=aw.ds'
    window.open(url)
  }
>>>>>>> dev

  const nextHandleClick = _ => {
    if (index + 1 === array.length) setIndex(0)
    else setIndex(index + 1)
  }
  const adoptHandleClick = _ => {
    window.open(array[index].url)
  }

  useEffect(() => {
    fetch('/api/userData')
      .then(res => res.json())
      .then(data => {
        console.log('users data', data)
        const { housing, kids, cats, dogs } = data.rows[0]
        if (housing === 'Apartment') {
          setUserHousing('small,medium')
        } else {
          setUserHousing('large,xlarge')
        }

        setUserKids(kids)
        setUserCats(cats)
        setUserDogs(dogs)
      })
      .catch(err => {
        console.log('error: ', err)
      })
  }, [])

  // creating access token
  useEffect(() => {
    const getAccessToken = async () => {
      const params = new URLSearchParams()
      console.log('params1: ', params)
      params.append('grant_type', 'client_credentials')
      console.log('params2: ', params)

      params.append('client_id', clientid)
      console.log('params3: ', params)

      params.append('secret_id', secretid)
      console.log('params4: ', params)

      const response = await fetch(
        'https://api.petfinder.com/v2/oauth2/token',
        {
          method: 'POST',
          body: params
        }
      )
      const newResult = await response.json()
      const newaccesstoken = newResult.access_token

      setAccessToken(newaccesstoken)
    }
<<<<<<< HEAD
    getAccessToken();
=======
    getAccessToken()
>>>>>>> dev
  }, [])

  // fetch requiest to petfinder api
  useEffect(() => {
    console.log('TESTSTSTSTSTSST:', `${accesstoken}`)
    const fetchPets = async () => {
      const petResults = await axios.get(
        url, {
          headers: {
            Authorization: `Bearer ${accesstoken}`
          }
        })
      const petResultsObj = await petResults
      const newPetResultsObj = petResultsObj.data.animals
      console.log(newPetResultsObj)
      setResults(newPetResultsObj)
    }
    fetchPets()
  }, [accesstoken])

  // useEffect(() => {
  //   fetch()
  // }, [userHousing, userKids, userCats, userDogs])
  if (array !== null) {
    return (
  <div>
      <button onClick={redirectToExternalWebsite}>Donate</button>
      <RealNavBar/>
      Main
      <div>
      {array[index].primary_photo_cropped
        ? (
        <img src={array[index].primary_photo_cropped.full}/>
          )
        : <img src="https://searx.be/image_proxy?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQdTFn3qQcjI4LfR1ulwyUaYyG9g4woaez8HWh967Zid21ZNzg3%26s&h=197db55d6d490ae7a7fc4532877be0ea1cabcc165b4b3e2ce22101945365a332" alt="" /> }

        <div>
        name {array[index].name}
        age {array[index].age}
        breed {array[0].breeds.primary}
        gender {array[index].gender}
        size {array[index].size}
        description {array[index].description}
        tags {array[index].tags}
        </div>
        <button onClick={adoptHandleClick}>Adopt Me</button>
        <button onClick={nextHandleClick}>Next</button>
      </div>
    </div>
    )
  }
}
export default Main
