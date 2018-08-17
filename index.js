// Kaycee Ingram
// Writing our own Promises to gain a real understanding.

const request = require('request');

function getData(api) {
  return new Promise((resolve, reject) => {
    request(api, (error, res, starWarsData) => {
      error ? reject(error) : resolve(starWarsData);
    });
  });
}

getData('https://swapi.co/api/people/1/')
  .then(data => console.log(data)) // do stuff with data (if succeeds).
  .catch(error => console.error(error)); // do stuff with error (if fails).