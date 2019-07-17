/*
    Obter usuário 
    Obter endereço e telefone usando o id do usuário
*/

function getUser(callback){
    setTimeout(function(){
        return callback(null, {
            name: 'Lucena',
            id: 27,
        })
    }, 1000)
}

function getAddress(idUser, callback){
    setTimeout(function() {
        return callback(null, 'Rua V');
    }, 1000)
}

function getPhone(idUser, callback){
    setTimeout(function(){
        return callback(null, '99 3232-3232');
    }, 1000)
}

const user = getUser(function resolveUser(error, user){
    if(error){
        console.log('Deu ruim no getUser');
    }
    console.log(user.name, user.id);
    getAddress(user.id, function resolveAddress(error1, address){
        if(error1){
            console.log('Deu ruim no getAddress');
        }
        console.log(address);
    });
    getPhone(user.id, function resolvePhone(error2, phone){
        if(error2){
            console.log('Deu ruim no getPhone');
        }
        console.log(phone);
    })
});


