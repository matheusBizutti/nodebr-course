const {get} = require('axios');

const URLBASE = `https://swapi.co/api/people`;

async function obterPessoas(nome) {

  const url = `${URLBASE}/?search=${nome}&format=json`;
  const result = await get(url);

  console.log('nock: ', result.data);
  return result.data.results.map(mapearPessoas);
}

function mapearPessoas(item) {
  return {
    nome: item.name,
    peso: item.height
  }
}

module.exports = {
  obterPessoas
}