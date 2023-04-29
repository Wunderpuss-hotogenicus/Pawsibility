// const path = require('path');

fetch('https://api.petfinder.com/v2/animals?type=dog', {
  headers: {
    Authorization: 'Bearer BnOiXaaLRv1CbvQeiwUrjKtQgIH2DRpTUEYXAfcSgSzFhvg1JX'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  