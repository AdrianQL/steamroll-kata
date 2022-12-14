# steamroll-kata 

## _Proyecto orientado a la resolución de un "kata"._ 

  

> Un kata de código en programación es un ejercicio dirigido a que los programadores desarrollen sus habilidades a base de práctica y repetición. Probablemente fue Dave Thomas, coautor del libro The Pragmatic Programmer, quien acuñó el término, en un guiño al concepto japonés de kata de las artes marciales 

  

## 🚜 Compactador de arrays o "steamroll" 🍥 

  

### Problema: 

#### _"Compacte una matriz anidada._ 

#### _Debe tener en cuenta los diferentes niveles de anidamiento."_ 

  

💭 Ejemplo :  

```sh 

compactador(1, 2, [3, 4, [5, 6]]) 

// return [1, 2, 3, 4, 5, 6] 

``` 

  

"easy !", ¿usaríamos el método [flat](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) no? Ya que a simple vista conocemos la profundidad del array dado simplemente haríamos... 

  

```sh 

function compactador(arr){ 
    return arr.flat([2]); 
} 

compactador(1, 2, [3, 4, [5, 6]]) 

// return [1, 2, 3, 4, 5, 6] 

``` 

> Pero, como en la mayoría de los casos no sabremos que "deep" tendrá nuestro array dado,  

> ¿Como podríamos realizar una función que aplanara cualquier array que su profundidad tendiese a infinito? 

  

### En este proyecto tienes un conjunto de "test" que deberás de pasar para completar el "kata" 💯 

  

## Instalación 

  

El proyecto requiere [Node.js](https://nodejs.org/) 

  

Simplemente realiza una instalación de dependencias al clonar el proyecto. 

```sh 

cd steamroll-kata 

npm i 

``` 

  

Para lanzar el conjunto de test: 

  

```sh 

npm run test 

``` 

  

Las únicas modificaciones que necesitara tu kata se realizaran sobre el archivo _steamroll.js_ 

  

### Mi solución la tienes en el tag  [optimal-resolution](https://github.com/AdrianQL/steamroll-kata/releases/tag/optimal-resolution) ✔️ 

  

> Se ira añadiendo nuevas soluciones 📁 
