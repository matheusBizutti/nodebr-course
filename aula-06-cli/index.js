const commander = require('commander');
const database = require('./database');
const Heroi = require('./heroi');

async function main() {

  commander
    .version('v1')
    .option('-n, --name [value]', 'Name of hero')
    .option('-p, --power [value]', 'Power of hero')
    .option('-i, --id [value]', 'Power of hero')
    .option('-c, --create', 'Create a new hero')
    .option('-l, --list', 'List of hero')
    .option('-u, --update [value]', 'Update a hero of id')
    .option('-r, --remove', 'Remove a hero of id')
    .parse(process.argv);

    const hero = new Heroi(commander);

    try {

      if(commander.create) {
        delete hero.id;
        const result = await database.cadastrar(commander);

        if (!result) {
          console.log('erro in create new hero');
          return;
        } else {
          console.log('create with success');
        }
      }

      if(commander.list) {
        const resultList = await database.listar();
        console.log(resultList);
        return
      }

      if(commander.remove) {
        const resultRemove = await database.remover(hero.id);

        if(!resultRemove) {
          console.log('Not removed');
          return;
        } else {
          console.log('Removed with success');
        }
      }

      if(commander.update) {
        const idForUpdate = parseInt(commander.update);
        // delete hero.id;
        const data = JSON.stringify(hero);
        const heroUpdate = JSON.parse(data);
        const result = await database.atualizar(idForUpdate, heroUpdate);

        if(!result) {
          console.log('error of update');
          return;
        } else {
          console.log('update with success');
        }


      }

    } catch (e) {
      console.log('error: ', e);
    }
}

main();