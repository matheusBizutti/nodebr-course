const axios = require('axios')
const URL = `https://swapi.co/api/people`

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`
  const response = await axios.get(url);

  return response.data;
}

// obterPessoas('r2')
//   .then((result) => {
//     console.log('Resultado: ', result);
//   })
//   .catch((error) => {
//     console.log('DEU RUIM: ', error);
//   });

module.exports = {
  obterPessoas
}