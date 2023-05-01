import axios from "axios";
import React, { useEffect, useState } from "react";
import RealNavBar from "../components/RealNavBar";

const Main = () => {
  const clientid = "BnOiXaaLRv1CbvQeiwUrjKtQgIH2DRpTUEYXAfcSgSzFhvg1JX";
  const secretid = "vnjIlV2ZZTwM1ykXmGV7vp67jdsqhpk5RJVOL6w4";
  // const apiUrl = `https://api.petfinder.com/v2/animals?type=dog&size=${userHousing}&good_with_children=${userKids}&good_with_cats=${userCats}&good_with_dogs=${userDogs}`
  const apiUrl = "https://api.petfinder.com/v2/animals?type=dog&size=large";

  const [array, setResults] = useState(null)
  const [accesstoken, setAccessToken] = useState()
  const [userHousing, setUserHousing] = useState()
  const [userKids, setUserKids] = useState()
  const [userCats, setUserCats] = useState()
  const [userDogs, setUserDogs] = useState()
  const [index, setIndex] = useState(0)
  const [userLocation, setUserLocation] = useState();

  const url = new URL("https://api.petfinder.com/v2/animals");
  const params = new URLSearchParams({
    type: "dog",
    size: userHousing,
    good_with_children: userKids,
    good_with_cats: userCats,
    good_with_dogs: userDogs,
    sort: 'random',
    userLocation: userLocation
    // distance: 500
  })
  url.search = params.toString()

  // const redirectToExternalWebsite = () => {
  //   const url = 'https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googlenonbrandbroad&initialms=MP_PMK_Googlenonbrandbroad&pcode=WPSP2GO2PK01&lpcode=WPSP2GO1PK01&test&gad=1&gclid=EAIaIQobChMI4J2v3LXU_gIVU83jBx2GNQAkEAAYASAAEgJyQPD_BwE&gclsrc=aw.ds'
  //   window.open(url)
  // }

  const previousHandleClick = _ => {
    if (index - 1 === -1) setIndex(array.length-1)
    else setIndex(index - 1)
  }

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
        const { housing, kids, cats, dogs, location } = data.rows[0]
        if (housing === 'Apartment') {
          setUserHousing('small,medium')
        } else {
          setUserHousing("large,xlarge");
        }

        setUserKids(kids)
        setUserCats(cats)
        setUserDogs(dogs)
        setUserLocation(location)

      })
      .catch(err => {
        console.log('error: ', err)
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, []);

  // creating access token
  useEffect(() => {
    const getAccessToken = async () => {
      const params = new URLSearchParams()
      // console.log('params1: ', params)
      params.append('grant_type', 'client_credentials')
      // console.log('params2: ', params)

      params.append('client_id', clientid)
      // console.log('params3: ', params)

      params.append('secret_id', secretid)
      // console.log('params4: ', params)

      const response = await fetch(
        "https://api.petfinder.com/v2/oauth2/token",
        {
          method: "POST",
          body: params,
        }
      );
      const newResult = await response.json();
      const newaccesstoken = newResult.access_token;

      setAccessToken(newaccesstoken)
    }
    getAccessToken()
  }, [])

  // fetch requiest to petfinder api
  useEffect(() => {
    const fetchPets = async () => {
      const petResults = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      });
      const petResultsObj = await petResults;
      const newPetResultsObj = petResultsObj.data.animals;
      console.log(newPetResultsObj);
      setResults(newPetResultsObj);
    };
    fetchPets();
  }, [accesstoken]);

  // useEffect(() => {
  //   fetch()
  // }, [userHousing, userKids, userCats, userDogs])
  if (array !== null) {
    return (
      <div className="div_container">
        {/* <button onClick={redirectToExternalWebsite}>Donate</button> */}
        <RealNavBar />
        <div>
          {array[index].primary_photo_cropped ? (
            <div className="dog_photo_container">
              <img
                className="dog_photo"
                src={array[index].primary_photo_cropped.full}
              />
            </div>
          ) : (
            <div className="dog_photo_container">
              <img
                className="dog_photo"
                src="https://searx.be/image_proxy?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQdTFn3qQcjI4LfR1ulwyUaYyG9g4woaez8HWh967Zid21ZNzg3%26s&h=197db55d6d490ae7a7fc4532877be0ea1cabcc165b4b3e2ce22101945365a332"
                alt=""
              />
            </div>
          )}

          <div className="dog_info">
            <h2 className="dog_name">{array[index].name}</h2>
            <h4 className="dog_age">Age: {array[index].age}</h4>
            <h4 className="dog_breed">Breed: {array[0].breeds.primary}</h4>
            <h4 className="dog_gender">Gender: {array[index].gender}</h4>
            <h4 className="dog_size">Size: {array[index].size}</h4>
            <h4 className="dog_description">
              Description: {array[index].description}
            </h4>
            <h4 className="dog_characteristics">
              Characteristics: {array[index].tags.join(', ')}
            </h4>
            <div className="dog_btns">
              <button className="previous" onClick={previousHandleClick}>Previous</button>
              <button className="adopt" onClick={adoptHandleClick}>Adopt Me</button>
              <button className="next" onClick={nextHandleClick}>Next</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
         <RealNavBar/>

         Can not find dogs. Please update your settings.
      </div>
    )
  }
};
export default Main;
