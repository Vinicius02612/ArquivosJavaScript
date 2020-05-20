const pessoa = { nome: 'Ana' }
pessoa.nome = 'Pedro'
    // não se pode atribuir em uma constante  um outro  objeto uma vez que uma vez que  a constante ja foi definaida.

//pessoa = { nome: 'pedro' }
//Congelando um objeto, e uma vez que esse objeto é congelado, ele não pode ser alterado dentro do codigo.
//nesse caso o objeto pessoa vai continuar sendo  Pedro.
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)