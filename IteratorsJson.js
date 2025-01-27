// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
// TO-DO - Agregar la ruta relativa desde la carpeta del proyecto
const dataJson = readFileSync('snorlax.json', 'utf8')
// Convertir JSON a Object
const data = JSON.parse(dataJson)

// Usa for...in para recorrer las propiedades del objeto principal
// y muestra su tipo de dato. Usa for...of para iterar sobre los índices de juegos
// (game_indices) y mostrar los nombres de las versiones.

// nos permite recorrer las claves de un objeto
// y si fuera un for of tendriamos que convertir el obj en un array
for (const key in data) {
  // console.log(key + ':' + typeof key)
}

for (const elememto of data.game_indices) {
  // console.log(elememto.version.name)
}
// se puede hacer por desustrucacion de objetos
// for (const {version} of data.game_indices) {
//     console.log(version.name)
// }

// Obtén un array con los nombres de todas las habilidades (abilities) del Pokémon,
// añadiendo el prefijo "Ability: " a cada nombre. (Posible requisito: Map)
const nombres = elemment => 'Ability:' + elemment.ability.name
console.log(data.abilities.map(nombres))
// Filtra los movimientos (moves) que se pueden aprender en el nivel inicial (level_learned_at: 0).
// Devuelve un array con los nombres de estos movimientos. (Posible requisito: Filter, Some, Map)

// Encuentra la habilidad que tenga is_hidden igual a true y devuelve su nombre.
// Si no existe, devuelve un mensaje indicando que no hay habilidades ocultas.

// Calcula el número total de juegos (game_indices) en los que aparece este Pokémon.
// (Posible requisito: Reduce)

// Recorre el array de held_items y muestra por consola el nombre de cada ítem
// junto con las versiones en las que está disponible. El output tiene que tener el
// formato Item: <Nombre del Item>, Versiones: <Nombres de las versiones>
// (Posible requisito: forEach, Map)

// Verifica si todas las habilidades (abilities) no son ocultas (is_hidden).
// Además, verifica si al menos un movimiento tiene el método de aprendizaje "machine".
// (Posible requisito: every, some)

// Convierte el array de habilidades (abilities) en un objeto donde las claves
// sean los nombres de las habilidades y los valores indiquen si son ocultas (is_hidden).
// (Posible requisito: Object.fromEntries)

// Crea una función autoejecutable que recorra los movimientos (moves)
// y retorne un array con objetos que contengan el nombre del movimiento
// y su primer método de aprendizaje (move_learn_method).
// (Posible requisito: Funcion autejecutable, map, )
