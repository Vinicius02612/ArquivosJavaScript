const pessoa = {
        nome: 'Rebeca',
        idade: 2,
        peso: 13

    }
    //vai pegar todas as chaves do objeto pessoa.
console.log(Object.keys(pessoa))
    //pegando os valores de um obejeto pessoa
console.log(Object.values(pessoa))
    //vao pegar todas as cahves e valores do objeto
console.log(Object.entries(pessoa))


//percorrer todos os elementos de um objeto usando o FOREACH.

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)

})


//usando operador destructuy
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)

})

// funcao defineProperty , qundo se define uma propriedade de um Objeto
//definindo se ela pode ser aterada ou não
Object.defineProperty(pessoa, 'dataDeNascimento', {
    //definindo se ela pode ser listada
    enumerable: true,
    //... se pode ser modificada
    writable: false,
    // atribuindo valor para a variavel dataDeNascimento 
    value: '01 / 02 / 2000'
})

pessoa.dataDeNascimento = '03/05/2000'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))

var res = console.log(Object.keys(pessoa))