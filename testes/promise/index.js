/*
    Obter usuário 
    Obter endereço e telefone usando o id do usuário
*/

function getUser(){
    return new Promise(function(resolve, reject){
        // return reject('Fake Error');
        setTimeout(function(){
            return resolve({
                name: 'lucena',
                id: 27
            })
        }, 1000)
    })
}

function getPhone(idUser){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            return resolve ({
                ddd: '(85)',
                phone: '3232-3232'
            })
        }, 1000)
    })
}

const user = getUser();

user   
    .then(function (user){
        return getPhone(user.id)
            .then(function resolvePhone(phone){
                return ({
                    resultUser: {
                        name: user.name,
                        id: user.id
                    },
                    resultPhone: {
                        ddd: phone.ddd,
                        phone: phone.phone
                    }
                })
            })
    })
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log('Deu ruim oh bixo: ', error);
    })