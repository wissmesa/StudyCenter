## 1.  map( ) :
 Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.

```
const array = [1,2,3,4,5]
const arraynuevo = array.map(item => item + 10)
console.log(arraynuevo)


// [11,12,13,14,15]

```

## 2. filter( ) :

 Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.

```
 const filterarray = array.filter(item => item ===3 || item ===5)
 console.log(filterarray)

// [3,5]
```

## 3. find() :
 Recorre el array y retorna la primera coincidencia del elemento que se busca.

```
 const find = array.find(item => item >3)
 console.log(find)
```
 // 4

 ## 4 sort() : 
 Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.

```
 const descArray = array.sort((a,b) => a > b ? -1:1)
 console.log(descArray )```