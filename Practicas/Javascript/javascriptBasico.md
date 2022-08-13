## BASICO

## ¿Qué es Javascript?
Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico. Débilmente tipado
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc). Ejemplo:

```
- 4 + "7";       // 47
- 4 * "7";       // 28
- 2 + true;      // 3
- false - 3;     // -3
```

## Dinámico
Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.

## ¿Realmente es Javascript un lenguaje interpretado?
Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador

## Javascript es Basckwards Compatible
Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está Babel que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.

## Datos y Tareas.

JS usa dos tipos de componentes principales:
Datos y Tareas.

Los datos es la información que se almacena en la memoria y sirve para ser usada en las tareas.

Hay dos tipos de valores, valores primitivos que engloban:
Valores numericos , Boolean (false, true) valores reservados e indefinidos: undefined y null.

Por otro lado están los datos no primitivos, que son los arrays (cadenas de texto) y los objetos que agrupan mayor cantida de información.

El segundo tipo de componente son las tareas, que no son otras que las funciones que se usan para cumplir un proposito involucrando los valores anteriormente mencionados para generar un resultado.

## Variables y Constantes

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let:


Const y Let es la forma en que se declaran las variables a partir de ECMAScript 6.

const: sirve para declarar variables que nunca van a ser modificadas:
-  No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. const pokemonType = ‘electric’ no puede haber:
const pokemonType = ‘grass’
-  No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: const pokemonType = ‘electric’ no puede ejecutarse:
pokemonType = ‘grass’
-  No es inmutable: osea no puede cambiar con objetos:

Let: Son variables que pueden ser modificadas, se pueden cambiar:
o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. let pokemonType = ‘electric’ no puede haber:
let pokemonType = ‘grass’
o Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’
o Su contexto de es bloque: Solo funciona dentro de un bloque {}, fuera de ello no.

VAR esta descontinuado y su uso ya no es recomendado 


## Funciones 

Tenemos dos tipos de funciones Declarativas y Expresion 

NOTA: Actualmente no es recomendable (mala practica) declarar una funcion
con la palabra reservada function , ya que el scope de la misma seria global, y el valor que tenga podra ser modificada, por ende es necesario crear una funcion flecha asociada a una constante, por ejemplo:

```
const ejemplo = () => {

}
```

## Operadores
```
//Operadores binarios:
3 + 2 //Suma
50 - 10 // Resta
10 * 20 //Multiplicación
20 / 2 //División

"Diego " + "De Granda" //concatenación de strings

//Operadores unitarios:
!false //negación de la negación = true

//Operadores de asignación:
var a = 1; //Asignamos un valor a la variable

//Operadores para comparar:
3 == "3"; //Compara los valores y devuelve "true" en este caso

3 === "3"; //Compara y valida los tipos y valores. Devuelve "falso" en este caso

5 < 3 //Compara y valida si el 5 es menor a 3
5 > 3 //Compara y valida si el 5 es mayor a 3
5 <= 6 //Compara y valida si el 5 es menor o igual al 6
5 >= 6 //Compara y valida si el 5 es mayor o igual al 6

a && b //Valida si ambas variables son verdaderas para que se cumpla la condición
a || b //Aquí se cumple la condición si alguna de las dos variables es verdadera

var edad = 40
edad++ //Incrementa el valor en 1

edad += 2 //Incrementa el valor por 2

```

## Condicionales
Para que se funcionen los condicionales la condicion siempre debe ser TRUE
en el caso de que sea FALSO se coloca un else para que maneje la excepcion
contraria o la negacion de la misma, 
Si deseamos realizar muchas validaciones seguidas utilizamos el else if
el cual su interpretacion seria algo como si no es la accion anterior entonces esta, y asi  sucesivamente cuantos else if necesitemos

### Ternario

condicion ? true : false  un ejemplo podria ser 

```
var numero = 1
var resultado = numero === 1 ? "El valor es uno" : "el valor no es uno"

```

NOTA: En caso de no haber una condicion sino solo la opcion asumimos un existe (true or false), por ejemplo 

```
const {lexfer,setLexfer} = useState(true)

return   (
   <>
      yo me llamo {lexfer ? "si" : "no"}
   </>
)

```

ya que el estado fue inicializado en true en el primer renderizado, el entrada en la primera validacion

## Switch
Sintaxis 

```
Switch (true) {
    case 1:
        console.log ("Soy Uno");
        break;
     case 10:
        console.log ("Soy un 10");
        break;
     case 100:
        console.log ("Soy un 100");
        break; 
        
/// Para este caso cambiamos el true por una variable como number y le asignamos un valor
}

```

NOTA: es importante colocar los break para que no entre a las proximas opciones

 ### ¿Qué pasa si no coloco la sentencia `break` en un `switch`?

#### Se validan todos los casos como verdaderos y se realizan las acciones asignadas a cada uno.



## Arrays

Sintaxis para declarar un arreglo

```
Var frutas  = ["manzana","durazno","pera","manzana"]

```

los metodos que tenemos son los siguientes

```
// Si deseamos agregar un nuevo elemento al final del array

frutas.push("tomate")

// Si deseamos eliminar el ultimo elemento de un array 

frutas.pop()

// Si deseamos agregar uno nuevo al principio del array

frutas.unshift("tomate")

// Si deseamos eliminar el primer elemento del array

frutas.shift()
)

// Si deseamos saber la posicion de un valor especifico del array

frutas.indexof("manzana")


```

NOTA: Al utilizar pop y shift no se le pasa parametro ya que el siempre eliminara el ultimo o el primero

---
---
