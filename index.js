console.log('practica_5 - Conjunto de nombres');
const prompt = require("prompt-sync")();
let band = 's'
const names = []

while (band != 'n') {
   const name = prompt('Ingrese un nombre: ')
   names.push(name)
   band = prompt('Desea continuar? s/n ').toLowerCase()[0] ?? 's'
}

// Cantidad de nombres
console.log('Cantidad de nombres:', names.length)

// Valores repetidos
const namesUnicos = names.filter((item, index, names) => names.indexOf(item) === index);
if (names.length != namesUnicos.length) {
   console.log('Hay repetidos');
}
else {
   console.log('NO hay repetidos');
}

let largeName = '', shortName = ''
names.forEach((element, index) => {
   if (index == 0) {
      largeName = element
      shortName = element
   }
   if (element.length > largeName.length) {
      largeName = element
   }
   if (element.length < shortName.length) {
      shortName = element
   }
});

console.log(`El nombre más largo es ${largeName}`);
console.log(`El nombre más corto es ${shortName}`);
