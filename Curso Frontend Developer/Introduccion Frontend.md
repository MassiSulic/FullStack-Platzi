# HTML y CSS

## Conceptos

> Lenguaje de marcado de hipertexto o *HTML* son las siglas del lenguaje que nos permite estructurar las paginas web, darles la anatomia y el lugar de donde tienen que ir todas las cosas, ya sean imagenes, botones, textos, etc.

> y hojas de estilos en cascada o *CSS* es el lenguaje que vamos a usar para darles estilos a toda la estructuracion que ya hicimos previamente 

El problema es que el navegador no entiende todo lo que nosotros escribimos, por eso cada navegador usa su propio motor de renderizado, en el caso de Chrome este motor es `Blink` y en el caso de Safari es `Webkit`.Estos motores se encargan de traducir todo lo que nosotros escribimos a un lenguaje que el navegador pueda entender, y lo hace por medio de 5 pasos

1. Transforma los archivos a un árbol de objetos HTML o CSS, estos se denominan DOM (Document Object Model) y CSSDOM (Cascade Style Sheet Object Model), respectivamente. Cada nodo en el árbol es una representación de los elementos que contiene el archivo HTML o CSS.

2. Calcula el estilo correspondiente a cada nodo del DOM relacionado al CSSDOM.

3. Calcula las dimensiones de cada nodo y dónde va en la pantalla.

4. Pinta o renderiza los diferentes elementos como cajas o contenedores.

5. Agrupa todas las cajas en diferentes capas para convertirlas en una imagen que se renderiza en pantalla.

## Anatonia de un archivo HTML

> Un documento html es una construccion de elementos, cadaelemento esta compuesto principalmente por:

```
Etiquetas como lo pueden ser <h1> (Abierto) </h1> (Cerrado)

y El contendio que hay en esa etiqueta, ej: <h1>Platzi</h1>
```

> Ademas las etiquetas que componen los elementos pueden tener atributos ej:
```
<h1 class = "title"> siendo <h1 (La etiqueta) class (El atributo) = "title" (El valor del atributo)>
```

> Por otro lado podemos colocar etiquetas identadas para que podamos leer mejor el documento ej:

```
<head>

    <p>

    </p>

</head>
```

> Y por utlimo podemos encontrar etiquetas que no necesitas un cierre `<h1> </h1>` y que simplemente se abran y se cierren sin `/` por ejemplo `<img>`

## Estructura basica de un archivo HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <section>
        <h1>Platzi</h1>
        <p>Tiene una comunidad</p>
        <ul>
            <li>Maravillosa</li>                    
            <li>Increible</li>
        </ul>
    </section>
</body>
</html>
```
### Elemento x elemento

- `<!DOCTYPE html>` = Declara que estamos usando html

- `<html lang="en">` = Es la etiqueta principal donde escribiremos todo nuestro documento, y podemos ver que tiene un atributo que es este caso es lenguaje, que tiene de valor *en / English*

- `<head>` = Que es la parte de arriba o cabecera de un sitio web donde podemos encontrar etiquetas meta que proporcionan informacion basica al documento y una etiqueta que seria el titulo 

- `<body>` = Que es el cuerpo y donde va a estar casi todo nuestro sitio web 
    - `<section>` = Ademas tenemos secciones dentro de `body`
        - `<h1>` = Un titulo 
        - `<p>` = Un parrafo
        - `<ul>` = Una lista desordenada
        - `<li>` = Y elementos de una lista 

> Ademas si escribimos html:5 en vsc, por ejemplo. Automaticamente nos dara la estructura basica de un documento html 

## Comentarios en HTML

> Los comentarios de HTML consiste en señalar algo que se ignorará. Para establecer un comentario HTML se lo envuelve entre `<!-- y -->`, independiente de la cantidad de líneas.

```
<!-- Este es un comentario de una línea -->

<!--
Este es un comentario de varias líneas
-->
```

## Estructura semantica HTML

> La estructura semantica nos dice que los motores de busqueda de las paginas web ven nuestro html e interpretan que es lo que nosotros tenemos en nuestro siti web, por eso es importante usar las etiquetas que corresponden en cada caso, ya que por ejemplo los `<div>` para los motores de busqueda no significan nada, entonces eso va a ser que no nos posicionemos correctamente

> Una buena practica es usa la estructura que todo sitio web deberia tener, que esta como referencia en las imagenes del curso donde las etiquetas que cumplen las funciones estan en el lugar correcto 

> La cuestion es que hay muchas formas de estructurar la semantica, pero lo principal es usar las etiquetas donde tienen que ir que todo se estructura dentro del `<body>`

Las etiquetas de la semantica del html son:

1. `<header>: define el encabezado de la página (no confundir con <head>).`
2. `<nav>: define una barra de navegación que incluye enlaces.`
3. `<section>: define una sección de la página.`
4. `<footer>: define un pie de página o de sección.`
5. `<article>: define un artículo, el cual puede tener su propio encabezado, navegación, sección o pie de página.`

