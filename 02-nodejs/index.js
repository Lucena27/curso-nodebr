/*
0 - Obter um usuário
1 - Obter o número do telefone de um usuário a partir do seu ID
2 - || endereço ||
*/

function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            telefone: '1199002',
            ddd: 11
        })
    }, 2000);
}

function obterEndereço(idUsuario, callback) {
    setTimeout(function(){
        return callback(null, {
            rua: 'dos bolos',
            numero: 0
        })
    }, 2000);
}

function resolverUsuario(erro, usuario){
    console.log('usuario', usuario);
}

obterUsuario( function resolverUsuario(error, usuario) {
    if(error){
        console.error('DEU RUIM em USUARIO', error);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('DEU RUIM em TELEFONE', error);
            return;
        }
        obterEndereço(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error('DEU RUIM em ENDEREÇO', error);
                return;
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua},${endereco.numero},
                Telefone: (${telefone.ddd})${telefone.telefone}
            `);
        })
    })
});
// const telefone = obterTelefone(usuario.id);


// console.log('telefone', telefone);