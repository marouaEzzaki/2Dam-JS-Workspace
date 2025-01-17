const lista = [90, 'Texto', Date.now(), NaN, null]
console.log(lista)

// es igual que en java el primer elemento esta en el indice 0
console.log(lista[0])
console.log(lista.length)

// cosas difeerentes con respecto a JAVA
// Destructing Aerrays
// Spreading

// Destructuracion -> desmonto el array
const lista2 = ['a', 'b', 'c']
const [varr1, varr2, var3] = lista2
console.log(varr2)
console.log(varr1)
console.log(var3)

// Spread -> un saco de valores y esparcirlo  es como juntar dos arrays
const lista3 = ['a', 'b', 'c']
const lista4 = ['d', 'e', ...lista3]

console.log(lista4)

// se pueden combinar
const [var1, ...var2] = ['a', 'b', 'c']
console.log(var2)

console.log(lista3.indexOf('b'))

const listaCiudades = ['Madrid', 'London', 'New York', 'Casablanca']
console.log(listaCiudades.length)
console.log(listaCiudades[0])
console.log(listaCiudades[listaCiudades.length - 1])
listaCiudades.unshift('Rabat')
listaCiudades.push('Qatar')
listaCiudades.pop()

const listaPaises = ['Marruecos', 'Noruega', 'Alemania', 'España']
console.log(listaCiudades, ...listaPaises)
