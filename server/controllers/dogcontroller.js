const db = require('../model/dogmodel');

// import React from 'react'

// export default function App () {
//   const getDogs = () => {
//     fetch('https://api.petfinder.com/v2/animals?type=dog', {
//       headers: {
//         Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCbk9pWGFhTFJ2MUNidlFlaXdVcmpLdFFnSUgyRFJwVFVFWVhBZmNTZ1N6Rmh2ZzFKWCIsImp0aSI6IjhjMmU1ZTgxZjE0NTJkMDg2ZmVjMDVkNTdjMGNhYTc2MzY1NjYzNTZkZDRjMGEzYzg4MmU3ZjMxOGJmYWVjZDE4YWUxOTYyYzk2NmIzZjExIiwiaWF0IjoxNjgyNzgxNDk1LCJuYmYiOjE2ODI3ODE0OTUsImV4cCI6MTY4Mjc4NTA5NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.s7HY-0kMTF7ZLlA2-MkUcv2hQ1QFGWwMq588vMLtoUZD6U0WPervY7neKh0UIYtA80cQZqQkdVhjzlwhqRXuljGTNgbA75GGnTQGD39LallXRy89tAegMfAKDHephmkGSSGrN1fiNm0EtGSPGA4WzakfT-xfJRHoGPBWPRVBi3ol102AwYyLqmylcCfg-WBzAOGPWfb4qK64dLUzKNZenqF0HbK8b-tOKEATfA6vgNmIFG6xTQiU-AEKmDtKDzWnmQEhUD3e86h1k65H-iyQA7NGUaCkMnAmPJmnENZad5YBA2B8x5Hm9kQSiyjhjbHZaMxqyRoPJswgPJVxpUY9Eg'
//       }
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch((error) => {
//         console.log(error)
//       })
//   }

//   return (
//     <div>
//       hi
//       <button onClick={getDogs}>Get Dogs</button>
//     </div>
//   )
// }