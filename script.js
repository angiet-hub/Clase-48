/* Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, 
correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores. */

const size = { width: 2, length: 5, height: 1 } 
let resultadoVolumen = 1;

const getBoxVolume = size => {
    for(let value of Object.values(size)) {
        resultadoVolumen *= value;
    }
    return resultadoVolumen
}
console.log(getBoxVolume(size))

/* Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (Math.floor), 
hacia arriba (Math.ceil) y dependiendo de su punto flotante (Math.round) */


const round = numberRound => {
    const resultadoRedondeo = {
    floor: Math.floor(numberRound),
    ceil: Math.ceil(numberRound),
    round: Math.round(numberRound)
    }

    return resultadoRedondeo
}

console.log(round(10.3))

/*  Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos. Es decir, 
debe contener las propiedades de ambos objetos. Para aquellas propiedades que están compartidas entre ambos, 
como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.*/

const info1 = {a: 1, b: 2, c: 3}
const info2 = {d: 4, b: 5}

const merge = (info1, info2) => {
    const resultadoMerge = Object.assign({}, info1, info2, info1);

    return resultadoMerge
}

console.log(merge(info1, info2))

/* Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos */


const differentiate = (object1, object2) => {
    const resultadoDif = {};
    for( let key in object1) {
        if(!(key in object2))
        resultadoDif[key] = object1[key]
    }
    for( let key in object2) {
        if(!(key in object1))
        resultadoDif[key] = object2[key]
    }
    
    return resultadoDif   
}
console.log(differentiate(info1, info2))

/* Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo 
las propiedades especificadas en el array */

const data = {a: 1, b: 2, c: 3}
const props = ["c", "b"]

const filterProperties = (object, props) => {
    const resultadoFilter = {};
    for( let key in object) {
        if(props.includes(key)) {
            resultadoFilter[key] = object[key]
        }
    }
    return resultadoFilter
}

console.log(filterProperties(data, props))

/* Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, 
devuelva un objeto con dichos productos, teniendo como valor true si puede comprarlo o false sino */

const products = { cookies: 60, chocolate: 110, soda: 120, }
const money = 115

const buyProducts = (object, money) => {
    const object2 = Object.assign({}, products)

    for(let value in object) {
        if(object2[value] <= money) {
            object2[value] = true
        } else if (object2[value] > money) {
            object2[value] = false
        }
    }
    return object2
}
console.log(buyProducts(products, money))

/* Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, true si 
puede comprarlos a todos o false si no */


const moneyBuy = 300

const canBuyAllProduct = (object1, moneyBuy) => {
    let suma = 0;
   
    for(let key in object1) {
        suma += object1[key];
        }
        if(suma <= moneyBuy) {
            return true;
        }
        else {
            return false
        }
    
 
}
console.log(canBuyAllProduct(products, moneyBuy))

/* Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto 
con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida */

const score = { EASY: 10, MEDIUM: 50, HARD: 100}
const challenges = { EASY: 3, MEDIUM: 4, HARD: 2}

const getXP = (obj1, obj2) => {
    let puntaje = 0;

    for(let key in obj1) {
        puntaje += obj1[key] * obj2[key]
    }
    for(let key in obj2) {
        puntaje += obj1[key] * obj2[key]
    }
   return puntaje
}

console.log(getXP(score,challenges))

/* Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que 
contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra */

const getStringInfo = str => {
    const result = {LETTERS: 0, DIGITS: 0, SPACES: 0};
    const arrays = str.split('');
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    for(let array of arrays) {
        if(array === ' ') {
            result.SPACES++
        }
        if(array === numbers[array]) {
            result.DIGITS++
        } else {
            result.LETTERS++
        }
    }
    return result
}

console.log(getStringInfo("H3ll0 Wor1d"))


/* Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones. */

const getParagraphInfo = str => {
    const result = {LETTERS: 0, WORDS: 0, SENTENCE: 0};
    const letters = str.split('');
    const words = str.split(' ');

    for(let letter of letters) {
        if(letter === '.'){
            result.SENTENCE++
        } else if (letter !== ' ') {
            result.LETTERS++
        }
    }
    for(let word of words) {
        result.WORDS++
    }

    return result
}

console.log(getParagraphInfo("Do. Or do not. There is no try."))


/* Crear una función que dado un string devuelva un objeto con cada palabra que hay y la cantidad de veces que 
aparece. La función debe ignorar el caso ("JavaScript" y "javascript" cuentan como una misma palabra) y el objeto 
devuelto debe tener todas sus propiedades en minúscula */

const countWords = str => {
    const result = {};
    const words = str.split(' ');

    for(let word of words) {
        result.word;
        result[word] = 0;
    }
    for(let key in result){
        for(let word of words) {
            if(word === key) {
                result[word]++
            }
        }
    }
    return result
}

console.log(countWords("El que compra pocas capas pocas capas paga"))

/* Los parámetros de búsqueda en una URL son aquellos que vienen después del signo ? y se escriben como 
parametro=valor, separados por el signo &. Crear una función que dada una URL, devuelva un objeto con cada 
parámetro como clave con su respectivo valor. */

const parseQueryParams = str => {
    const words = str.split('?');
    const words2 = words[1].split('&');//[ "keyword=objects", "language=javascript", "level=intermediate" ]
    const words3 = [];
    const result = {};

    for(let word of words2) {
        const noTengoMasNombres = word.split('=');
        words3.push(noTengoMasNombres);
    }

    for(let word of words3) {
        const nuevaVariable = word[0]
        result.nuevaVariable
        result[nuevaVariable] = word[1]
    }

    /* for(let word of words3) {
        result[word] = word[1]
        result.word = word[0]
        
    }
 */
    return result
}

console.log(parseQueryParams("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"))

/* Crear una función que dado un string y un array de letras, devuelva un objeto con la cantidad de dichas letras 
que hay en cada palabra. La función debería tener un parámetro opcional que permite definir si va a ser sensible 
al caso o no (si "A" y "a" cuentan como dos letras distintas o no) */

const findOcurrencies = (str, arr) => {
    const result = {};
    const letras = str.split('');
    const palabras = str.split(' ')

    for(let palabra of palabras) {
        result.palabra;
        result[palabra] = 0;
    }

    for(let letra of letras) {
        for(let key of arr) {
            
    }
    }
}

console.log(findOcurrencies("Hello World", ["o", "l"]))