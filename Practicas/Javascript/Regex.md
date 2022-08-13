## Test Method

JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es usando el .test()método. El .test()método toma la expresión regular, la aplica a una cadena (que se coloca entre paréntesis) y devuelve trueo false si su patrón encuentra algo o no.

```
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```
El test método aquí devuelve true.