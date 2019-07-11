/*
0 - Obter um usuário
1 - Obter o número do telefone de um usuário a partir do seu ID
2 - || endereço ||
*/
// Importamos um módulo interno do node.js

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario() {
    // Quando der ruim = Reject
    // Quando der bom = Resolve
    return new Promise( function resolvePromise(resolve, reject) {
        setTimeout(function() {
            // return reject(new Error("Deu ruim real agora!!!!"))
            
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
    
    
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(function() {
            return resolve({
                telefone: '1199002',
                ddd: 11
            })
        }, 2000);
    })
    
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function(){
        return callback(null, {
            rua: 'Rua dos bolos',
            numero: 0
        })
    }, 2000);
}

const usuarioPromise = obterUsuario();

// Manipular sucesso = .then
// Manipular erros   = .catch
// Usuario -> Telefone -> Telefone

usuarioPromise
    .then(function(usuario){
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result){
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result    
                }
            })
    })
    .then(function (resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolveEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado){
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function(error){
        console.log('DEU RUIM', error)
    })


// obterUsuario( function resolverUsuario(error, usuario) {
//     if(error){
//         console.error('DEU RUIM em USUARIO', error);
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error1){
//             console.error('DEU RUIM em TELEFONE', error);
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.error('DEU RUIM em ENDEREÇO', error);
//                 return;
//             }
//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereço: ${endereco.rua},${endereco.numero},
//                 Telefone: (${telefone.ddd})${telefone.telefone}
//             `);
//         })
//     })
// });
// const telefone = obterTelefone(usuario.id);


// console.log('telefone', telefone);