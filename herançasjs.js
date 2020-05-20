const ferrari = {
        modelo: 'F40',
        velMax: 200
    }
    // Um objeto em javaScript tem uma referencia pra o seu prototipo
const volvo = {
    modeio: 'v40',
    valMax: 200
}
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ == Object.prototype)
console.log(volvo.__proto__ == Object.prototype)