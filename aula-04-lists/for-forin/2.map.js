const service = require('./service');

async function main()  {

  try {

    const results = await service.obterPessoas('a');
    // const names = [];
    // results.results.forEach(item => {
    //   names.push(item.name);
    // });

    // - ARRAY.MAP
    const names = results.results.map((pessoa) => pessoa.name);
    console.log('names', names);

  } catch (error) {

  }

}

main();