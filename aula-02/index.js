/*
0 - Obter um usuário
1 - Obter número de telefone de um usuário a partir do ID
2 - Obter endereco do usuário pelo ID
*/

function obterUsuario(callback) {

  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date()
   });
  }, 1000); 
  
}

function obterTelefone(idUsuario, callback) {

  setTimeout(() => {
    return callback(null, {
      telefone: '90101-0101',
      ddd: '11'
    });
  })

}

function obterEndereco(idUsuario, callback) {

  setTimeout(() => {
    return callback(null, {
      rua: 'Rua dos bobos',
      numero: '0'
    });
  })

}

obterUsuario((error, usuario) => {

  if (error) {
    console.log('deu ruim em usuario: ', error);
    return
  }

  obterTelefone(usuario.id, (error1, telefone) => {

    if (error1) {
      console.log('deu ruim em telefone: ', error1);
      return
    }

    obterEndereco(usuario.id, (error2, endereco) => {

      if (error2) {
        console.log('deu ruim em telefone: ', error1);
        return
      }

      console.log(`Nome: ${usuario.nome}, Endereco: ${endereco.rua}, ${endereco.numero}, Telefone: (${telefone.ddd}) - ${telefone.telefone}`);
    });

  });
});