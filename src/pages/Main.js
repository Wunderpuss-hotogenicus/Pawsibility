import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RealNavBar from '../components/RealNavBar'

const Main = () => {
  const clientid = 'BnOiXaaLRv1CbvQeiwUrjKtQgIH2DRpTUEYXAfcSgSzFhvg1JX'
  const secretid = 'vnjIlV2ZZTwM1ykXmGV7vp67jdsqhpk5RJVOL6w4'
  // const apiUrl = `https://api.petfinder.com/v2/animals?type=dog&size=${userHousing}&good_with_children=${userKids}&good_with_cats=${userCats}&good_with_dogs=${userDogs}`
  const apiUrl = `https://api.petfinder.com/v2/animals?type=dog&size=large`;
  

  const [array, setResults] = useState()
  const [accesstoken, setAccessToken] = useState()
  const [userHousing, setUserHousing] = useState()
  const [userKids, setUserKids] = useState()
  const [userCats, setUserCats] = useState()
  const [userDogs, setUserDogs] = useState()
  const [index, setIndex] = useState(0)


  const redirectToExternalWebsite = () => {
    const url = 'https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googlenonbrandbroad&initialms=MP_PMK_Googlenonbrandbroad&pcode=WPSP2GO2PK01&lpcode=WPSP2GO1PK01&test&gad=1&gclid=EAIaIQobChMI4J2v3LXU_gIVU83jBx2GNQAkEAAYASAAEgJyQPD_BwE&gclsrc=aw.ds';
     window.open(url);
  };

  const nextHandleClick = _ => {
    if (index + 1 === array.length) setIndex(0)
    else setIndex(index + 1)
  }
  const adoptHandleClick = _ => {
    window.open(array[index].animals[0].url)
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
      params.append('grant_type', 'client_credentials')
      params.append('client_id', clientid)
      params.append('secret_id', secretid)
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
    getAccessToken();

  }, [])

  // fetch requiest to petfinder api
  useEffect(() => {
    console.log('TESTSTSTSTSTSST:', `${accesstoken}`)
    const fetchPets = async () => {
      const petResults = await axios.get(
        apiUrl, {
          headers: {
            Authorization: `Bearer ${accesstoken}`
          }
        })
      // const results = await petResults.json()
      // console.log(json.animals)
      console.log(userHousing)
      console.log(await petResults)
    }
    fetchPets()
  }, [accesstoken])
  

  

  // useEffect(() => {
  //   fetch()
  // }, [userHousing, userKids, userCats, userDogs])

  return (
  <div>
      <button onClick={redirectToExternalWebsite}>Donate</button>
      {/* <RealNavBar/>
      Main
      <div>
        <img src={array[index].animals[0].photos[0].medium}/>
        <div>
        name {array[index].animals[0].name}
        age {array[index].animals[0].age}
        breed {array[0].animals[0].breeds.primary}
        gender {array[index].animals[0].gender}
        size {array[index].animals[0].size}
        description {array[index].animals[0].description}
        tags {array[index].animals[0].tags}
        </div>
        <button onClick={adoptHandleClick}>Adopt Me</button>
        <button onClick={nextHandleClick}>Next</button>
      </div> */}
    </div>
  )
}

export default Main
