//maneiras de criar objetos 
//Maneira 1
const a = 1
const b = 2
const c = 3
const obj01 = { a: a, b: b, c: c }

//Maneira 02

const Obj02 = { a, b, c }

console.log(obj01, Obj02)

//Criando Objetos apartir de uma Srtring

const nome = 'nota'
const valor = 7.89
const obj03 = {}
obj03[nome] = valor
console.log(obj03)

//formas de definir funcoes dentro de um objeto
const obj5 = {
    //forma 1 antiga
    funcao: function() {
        //codigo da funcao
    },
    //forma 2 forma nova    
    funcao02() {
        //...
    }

}
console.log(obj5)