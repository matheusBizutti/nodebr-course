const { obterPessoas } = require('./service');

async function main() {

  try {

    const { results } = await obterPessoas('a');

    const height = results.map(people => parseInt(people.height));

    const total = height.reduce((previous, next) => {
      return previous + next;
    });

    console.log('total: ' + total);  

  } catch (error) {

    console.log('DEU RUIM: ', error);

  }

}

main();