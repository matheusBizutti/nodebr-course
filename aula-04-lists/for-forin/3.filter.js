const { obterPessoas } = require('./service');

async function main() {

  try {

    const { results } = await obterPessoas('a');

    const familyLars = results.filter((item) => {

      const result = item.name.toLowerCase().indexOf('lars') !== -1;
      return result;
    });

    const names = familyLars.map((people) => people.name);
    console.log('names with `lars` name: ', names);

  } catch (error) {
    console.log('DEU RUIM: ', error);
  }

}

main();