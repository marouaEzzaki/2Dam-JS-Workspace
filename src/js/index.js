const cadena = 'esto es un texto'
const numero = 12
const verdadero = true
const vacia = ''
const var5 = null
console.log(typeof cadena)
console.log(String(numero))
console.log(verdadero)
console.log(typeof var5)
console.log(typeof vacia)

// javascropt va a hacer todo lo posible para convertir un tipo a otro
//  Nan -> not a number

const texto = 'texto de prueba'
const booleano = true

console.log(Number(texto), Number(booleano))

console.log(5 === '5')
console.log(5 !== '5')

console.log('1' + true)

console.log('100' - '20')

const textoTrue = 'two'
const bsah = true

if (textoTrue > bsah) {
  console.log('no se ejecuta')
} else {
  console.log('se ejecuta')
}

console.log(Number.MAX_VALUE, Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
console.log(NaN)

// eslint-disable-next-line no-unused-vars
const variable = 'hola'
// if (condition) {

// } else {

// }

// Datess

console.log(new Date())
console.log(Date.now())// te da los miliseguundos desde 1970

// year, month, day, hour, minutes, seconds, mls
console.log(new Date(2024, 0, 31, 14, 30, 0, 0))

const fecha = new Date()

fecha.setFullYear(2024)
fecha.setMonth(1)
fecha.setDate(10)
console.log(fecha)

const fecha2 = new Date()
console.log(fecha2.getFullYear())
console.log(fecha2.getMonth())
// mes 0 es enero y el dia 0 es domingo
console.log(fecha2.getDate)

const fecha3 = Date.UTC(2024, 0, 13, 14, 30, 0, 0)
console.log(fecha3)

console.log(fecha.toLocaleDateString('es-ES'))

// tambien podemos operar con fechas

const fecha4 = new Date(2024, 0, 10, 14, 30, 0) // Enero
const fecha5 = new Date(2024, 1, 10, 14, 30, 0) // Febrero

const diferencia = fecha5 - fecha4
console.log(diferencia / (1000 * 60 * 60 * 24))

const mayor = fecha5 > fecha4
console.log(mayor)

// La que mas vamos a usar es Date.now()
