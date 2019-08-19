function getUser(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            return resolve ({
                user: 'Lucena',
                id: 27
            })
        }, 1000)
    })
}

function getPhone(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            return resolve ({
                phone: '3232-3232',
                ddd: '85'
            })
        }, 1000)
    })
}

function getAddress(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            return resolve ({
                street: 'Brooklyn',
                number: '99'
            })
        }, 1000)
    })
}

async function main(){
    try{
        const user = await getUser();
        const result = await Promise.all([
            getPhone(user.id),
            getAddress(user.id)
        ])

        const phone = result[0]
        const address = result[1]

        console.log(`
            Nome: ${user.user}
            Telefone: (${phone.ddd}) ${phone.phone}
            Endereço: ${address.street}, ${address.number}
        `);

    }catch{

    }
}

main();