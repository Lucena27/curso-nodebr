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

function obterTelefone(idUsuario) {
    setTimeout(function() {
        return {
            telefone: '1199002',
            ddd: 11
        }
    }, 2000);
}

function obterEndereço(idUsuario) {
    
}

function resolverUsuario(erro, usuario){
    console.log('usuario', usuario);
}

obterUsuario( function resolverUsuario(error, usuario) {
    if(error){
        console.error('DEU RUIM em USUARIO', error);
        return;
    }
});
// const telefone = obterTelefone(usuario.id);


// console.log('telefone', telefone);