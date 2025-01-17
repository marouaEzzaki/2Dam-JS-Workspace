// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
// TO-DO - Agregar la ruta relativa desde la carpeta del proyecto
const dataJson = readFileSync('snorlax.json', 'utf8')

// TO-DO - Convertir JSON a Object
const data = JSON.parse(dataJson)

// 1. Crea un nuevo objeto, denominado info, que tenga las claves abilities, game_indices,
// held_items, moves y stats. Asigna todos un array vacio

const info = {
  abilities: [],
  game_indices: [],
  held_items: [],
  moves: [],
  stats: []
}

// 2. Del JSON, imprime por pantalla las mismas claves que has utilizado
// al crear tu objeto info

// console.log(data.abilities)
// console.log(data.game_indices)
// console.log(data.held_items)
/// console.log(data.moves)

// 3. Agrega al array vacio de abilities el nombre de las habilidades contenidas en el JSON.
// 3.1. Accede manualmente a los 3 nombres y haz un push al array vacio
// 3.2. Modifica el acceso manual para que ahora utilices un for para hacer push a los 3 nombres

/*
console.log(data.abilities[0].ability.name) // <-- [{}, {}, {}]
console.log(data.abilities[1].ability.name) // <-- [{}, {}, {}]
console.log(data.abilities[2].ability.name) // <-- [{}, {}, {}]
*/
info.abilities.push(data.abilities[0].ability.name)
info.abilities.push(data.abilities[1].ability.name)
info.abilities.push(data.abilities[2].ability.name)

console.log(info.abilities)

// 4. Modifica el array abilities del objeto info para que ahora contenga
// tres subarrays, formados por el nombre y la URL
// Borra la propiedad abilties y vuelvela a crear dinamicamente

// 5. Usa el operado spread (...) para agregar al array vacio de game_indices de info
// los datos contenidos en game_indices del json

// 6. Modifica con un bucle cada una de las posiciones del array game_indices de info
// para que solo contena un objeto formado ppr game_index y name

// 7. Dentro del JSON, accede a los nombres de los items de held_items.
// Crea un array con solo los nombres y unelos para crear una string separado por <->
// Guardalo dentro del info -> held_items, sobreescribiendo el array vacio

// 8. De la clave moves del JSON, crea un array que contenga todos los nombres
// de los movimientos. Tras ello ordenalos alfabeticamente y ingresa en el array vacio
// de moves dentro los primeros 10 movimientos

// 9. Crea un objeto compuesto de las claves hp, attack, defense,
// specialAttack, specialDefense y speed. Ingresa los valores que se indican en JSON
// referente a estos nombres. Tras ello ingresalo en info -> stats sustituyendo al array
// vacio

// 10. Dentro de stats convierte el objeto en un array,
// aplanalo y elimina los strings El resultado te tiene que quedar
// los valores numericos de las stats
