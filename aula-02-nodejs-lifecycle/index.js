/*
0 - Obter um usuário
1 - Obter número de telefone de um usuário a partir do ID
2 - Obter endereco do usuário pelo ID
*/

function obterUsuario() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
     });
    }, 1000); 
  });
  
  
}

function obterTelefone(idUsuario) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefone: '90101-0101',
        ddd: '11'
      });
    })
  })

}

function obterEndereco(idUsuario) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        rua: 'Rua dos bobos',
        numero: '0'
      });
    })
  })

}

// - 1o passo - add a palavra async na function -> retorno será uma Promise
// - 2o passo - add a palavra await antes das chamdas para as promises
main();
async function main() {

  try {

    console.time("Medida promise");
    const usuario = await obterUsuario();

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id)
    ]);

    const endereco = resultado[1];
    const telefone = resultado[0];

    console.timeEnd("Medida promise");
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEndereco(usuario.id);

    console.log(`Usuario:  ${usuario.nome}, Telefone: (${telefone.ddd}) ${telefone.telefone} Endereco: ${endereco.rua} - ${endereco.numero}`);
  }
  catch (error) {
    console.log("Deu ruim: " + error);
  }

}
// - PROMISES COM THEN

// // - callback para exemplificar o promisify
// function obterEnderecoCallback(idUsuario, callback) {

//   setTimeout(() => {
//     return callback(null, {
//       rua: 'Rua dos bobos',
//       numero: '0'
//     });
//   })

// }

// // - importamos um módule interno do node.js
// const util = require('util');

// // - promisify Callback para Promise
// const obterEnderecoAsync = util.promisify(obterEnderecoCallback);

// const user = obterUsuario();

// user
//   .then((usuario) => {
//     return obterTelefone(usuario.id)
//       .then((result) => {
//         return {
//           usuario: {
//             nome: usuario.nome,
//             id: usuario.id
//           },
//           telefone: result
//         }
//       })
//   })
//   .then((resultado) => {
//     const endereco = obterEnderecoAsync(resultado.usuario.id);
//     return endereco.then((resolve) => {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: resolve
//       }
//     });
//   })
//   .then((resultado) => {
//     console.log(`Nome: ${resultado.usuario.nome}
//                  Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//                  Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}`);
//   })
//   .catch((error) => {
//     console.log('DEU RUIM: ', error);
//   });


// - Forma antigo de callback
// obterUsuario((error, usuario) => {

//   if (error) {
//     console.log('deu ruim em usuario: ', error);
//     return
//   }

//   obterTelefone(usuario.id, (error1, telefone) => {

//     if (error1) {
//       console.log('deu ruim em telefone: ', error1);
//       return
//     }

//     obterEndereco(usuario.id, (error2, endereco) => {

//       if (error2) {
//         console.log('deu ruim em telefone: ', error1);
//         return
//       }

//       console.log(`Nome: ${usuario.nome}, Endereco: ${endereco.rua}, ${endereco.numero}, Telefone: (${telefone.ddd}) - ${telefone.telefone}`);
//     });

//   });
// });