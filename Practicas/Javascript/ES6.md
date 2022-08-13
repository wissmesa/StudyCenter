## ES6 

Es importante considerar que si se pone Const en un array, objeto,
no quiere decir que no puede mutar el valor de la data que poseen,
solo protege que no pueda volver a crearse o reasignar valor
, por ejemplo:

```
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);

s = [1, 2, 3] will result in an error. The console.log will display the value [5, 6, 45].

```

Para evitar justamente esto se utiliza el metodo **Object.freeze**

```
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};

Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);
```
---
## Funciones flecha 

En JavaScript, a menudo no necesitamos nombrar nuestras funciones, especialmente cuando pasamos una función como argumento a otra función. En su lugar, creamos funciones en línea. No necesitamos nombrar estas funciones porque no las reutilizamos en ningún otro lugar.

antes se usaba la siguiente sintaxis

```
const myFunc = function() {
  const myVar = "value";
  return myVar;
}

Y siendo la manera nuevo asi:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```
---
## Con parámetros

Al igual que una función normal, puede pasar argumentos a una función de flecha.

```
const doubler = (item) => item * 2;
doubler(4);
```
Si una función de flecha tiene un solo parámetro, se pueden omitir los paréntesis que encierran el parámetro.

```
const doubler = item => item * 2;

```

Es posible pasar más de un argumento a una función de flecha.

```
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```
---
## Establecer parámetros predeterminados 

Supongamos que se pasan parametros a una funcion y en algun llamado que se hace, el parametro o los parametros llegan sin valor a la misma "undefined",
se puede controlar esta excepsion o caso, asignandole un valor predeterminado
en caso de ocurrir este caso, por ejemplo :


```
const increment = (number, value=1) => number + value;
console.log(increment())

```

al agregar value = 1 por defecto al momento de pasarselo indicamos que en caso de que llegue value **undefined** se asignara el valor 1 al momento de ser ejecutada la funcion, de ser lo contrario lo omitira, y asignara el valor que tenga

---
##  Rest con parámetros de función

Con el parámetro rest, puede crear funciones que toman un número variable de argumentos. Estos argumentos se almacenan en una matriz a la que se puede acceder más tarde desde dentro de la función.

```
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```
La consola mostraría las cadenas You have passed 3 arguments.y You have passed 4 arguments..

Otro ejemplo seria:

```
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
  
}

console.log(sum(1,2,3,4,5,6,7))
```

##  Operador de propagación (spread operator)

ES6 presenta el operador de expansión , que nos permite expandir matrices y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

```
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
maximustendría un valor de 89.
```

**...arr** devuelve una matriz desempaquetada. En otras palabras, extiende la matriz. Sin embargo, el operador de propagación solo funciona en el lugar, como en un argumento de una función o en un literal de matriz. El siguiente código no funcionará:
```
const spreaded = ...arr;

ESTO NO ES VALIDO
```

Asi como ocurre con las funciones y se pasa **...arg** este funciona de la misma manera en el sentido que copia, accede a todos los elementos de un array, de esa manera puede realizar metodos sobre ellos. Por la misma razon solo puede ser usado dentro de una funcion y no como el segundo ejemplo

```
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2; 

arr2 = [...arr1];  // Change this line

console.log(arr2);

```

En este ultimo objeto podemos entender mejor su funcionamiento, ya que con el operador de propagacion hacemos una copia identica del primer array, y al momento de hacer un **console.log** del mismo nos devolvera los mismos elementos de arr1, pero sin mutar el array original

---

## Desestructuración 

Desestructuración para extraer valores de los objetos

La asignación de desestructuración es una sintaxis especial introducida en ES6, para asignar claramente valores tomados directamente de un objeto.

Considere el siguiente código ES5:

```
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

```

**name** = John Doe, y **age** = 34.

Aquí hay una declaración de asignación equivalente que usa la sintaxis de desestructuración de ES6:

```
const { name, age } = user;
```

## Asignar variables de objetos

La desestructuración le permite asignar un nuevo nombre de variable al extraer valores. Puede hacer esto poniendo el nuevo nombre después de dos puntos al asignar el valor.


Usando el mismo objeto del último ejemplo:
```
const user = { name: 'John Doe', age: 34 };
```
Así es como puede dar nuevos nombres de variables en la tarea:
```
const { name: userName, age: userAge } = user;
```

## Asignar variables de objetos anidados
```
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Aquí se explica cómo extraer los valores de las propiedades del objeto y asignarlos a variables con el mismo nombre:
```
const { johnDoe: { age, email }} = user;
```
Y así es como puede asignar los valores de las propiedades de un objeto a las variables con diferentes nombres:
```
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

## Desestructuración de matrices

Una diferencia clave entre el operador de distribución y la desestructuración de la matriz es que el operador de distribución desempaqueta todo el contenido de una matriz en una lista separada por comas. En consecuencia, no puede elegir qué elementos desea asignar a las variables.

Desestructurar una matriz nos permite hacer exactamente eso:
```
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

La consola mostrará los valores de a y b como 1, 2.
```
A la variable ase le asigna el primer valor de la matriz y bse le asigna el segundo valor de la matriz. También podemos acceder al valor en cualquier índice en una matriz con desestructuración usando comas para alcanzar el índice deseado:

```
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

La consola mostrará los valores de a,b y c como 1, 2, 5.
```

## Promise

Una promesa en JavaScript es exactamente lo que parece: se usa para hacer una promesa de hacer algo, generalmente de forma asíncrona. Cuando la tarea se completa, o cumples tu promesa o no la cumples. Promesa es una función constructora, por lo que debe usar la palabra **new** clave para crear una. Toma una función, como su argumento, con dos parámetros  resolve y reject. Estos son métodos utilizados para determinar el resultado de la promesa. La sintaxis se ve así:


```
const myPromise = new Promise((resolve, reject) => {

});

```
```
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
    
  if(responseFromServer) {
     resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```

Los parámetros resolvey rejectproporcionados al argumento de la promesa se utilizan para hacer esto. resolvese usa cuando quiere que su promesa tenga éxito y rejectse usa cuando quiere que falle. Estos son métodos que toman un argumento

## Manejar una promesa cumplida .then

Las promesas son más útiles cuando tiene un proceso que lleva una cantidad de tiempo desconocida en su código (es decir, algo asincrónico), a menudo una solicitud del servidor. Cuando realiza una solicitud del servidor, lleva algo de tiempo y, una vez que se completa, generalmente desea hacer algo con la respuesta del servidor. Esto se puede lograr usando el thenmétodo. El thenmétodo se ejecuta inmediatamente después de que se cumpla su promesa con resolve. Aquí hay un ejemplo:

```
myPromise.then(result => {
  
});
```

**Nota:** **result** proviene del argumento dado al **resolve** método.
es decir se ejecuta cuando se cumple la condicion resolve


## Manejar una Promesa Rechazada con .catch

Asi como result esta relacionado con resolve, Catch esta relacionado con 
reject, es el método utilizado cuando su promesa ha sido rechazada.

```
myPromise.catch(error => {
  
});
```

error es el argumento pasado al reject método.


```
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});


```

en este caso como se seteo la variable en falso, entraria en el reject y se ejecutaria el catch

