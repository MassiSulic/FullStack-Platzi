# Introduccion 

## Anatomia de una delcaracion CSS

> La anatomia basica de CSS es principalmente un selector para hacer referencia al HTML, llaves donde entraran las propiedas y valores de dichas propiedades, ej:

```
selector {
    Propiedad: valor;
}
```
- `selector` = Indica a que elemento del HTML le estoy asignando las siguientes propiedades
- `{ }` = Las llaves nos delimitan donde se van a encontrar las propiedades y valores para un selector
- `propiedad` = Es el nombre del estilo en CSS
- `valor` = Es el valor que tomara la propiedad

> Ejemplo practico
```
h1{
    color: pink;
}
```

## Comantarios CSS

Para comentar lineas de codigo en CSS utilizamos `/* */`

## Propiedades basicas de CSS

- `color` = establece el color del texto de un elemento.
- `background-color` = establece un color de fondo al elemento.
- `font-size` =  establece el tamaño de la fuente.
- `width` = establece la anchura de un elemento.
- `height` = establece la altura de un elemento.

## Tipos de selectores basicos CSS

> Los selectores nos sirven para especificarle a CSS que es lo que vamos a estilizar, tenemos diversos tipos ya que podemos ser muy especificos a la hora de decirle a CSS como queremos estilizar. Los principales selectores son los siguientes

- `de Tipo` = Selecciona todos los elementos que coincidan con el nombre de la etiqueta HTML.
```
    div {
    /* Todos los div en el documento */
}
```

- `de Clase` = Selecciona todos los elementos que coincidan con las etiquetas HTML que contengan el atributo class. Para seleccionar estos elementos, se empieza por un punto . y seguido el valor exacto del atributo class de la etiqueta. Puede ser cualquier valor que desees colocar. Puede existir más de un valor dentro del atributo class en HTML separados por espacios.
```
<!--archivo HTML-->
<div class="card card1"> Soy una carta </div>
```

- `de ID` = Selecciona el único elemento que coincida con la etiqueta HTML que contenga el atributo id. Solo puede existir un valor id para todo el documento. Para seleccionar el elemento, se empieza por el símbolo de hashtag # y seguido el valor exacto del atributo id de la etiqueta. Puede ser cualquier valor que desees colocar.
```
<!--archivo HTML-->
<button id="eliminar"> Eliminar  </button>
```

- `de Atributo` = Selecciona los elementos que coincidan con la etiqueta HTML que contenga el atributo y valor especificado. Para seleccionar los elementos, se empieza por el nombre de la etiqueta, seguido de corchetes [] que contiene el atributo y valor especificado.

```
<!--archivo HTML-->
<a href="https://platzi.com"> Ir a Platzi </a>
```

- `Universal` = Selecciona todos los elementos del documento mediante un asterisco *.
```
* {
    /* Todos los elementos */
}
```

## Selectores combinados

> Un selector combinador es la unión de dos o más selectores básicos.

- `Combinador de descendientes` = Selecciona todos los elementos del selector de la derecha que son hijos del selector de la izquierda, independientemente de la profundidad. Estos selectores están separados por un espacio.
```
padre hijos {
    /* Todos los hijos del padre */
}

div p{
    /* Todos los hijos <p> de <div>*/
}

.container img{
    /* Todos los hijos <img> de la clase "container"*/
}
```

- `Combinador de hijo directo` = Selecciona todos los elementos del selector de la derecha que son hijos directos del selector de la izquierda. Estos selectores están separados por >.
```
padre > hijos_directos {
    /* Todos los hijos directos del padre */
}

div > p{
    /* Todos los hijos directos <p> de <div>*/
}

.container > img{
    /* Todos los hijos directos <img> de la clase "container"*/
}
```

- `Combinador de elemento adyacente` = Selecciona todos los elementos del selector de la derecha que están adyacente al selector de la izquierda. Estos selectores están separados por +.
```
elemento + adyacente {
    /* Elementos adyacentes */
}

div + p{
    /* Todos los <p> adyacentes a <div>*/
}

.container + img{
    /* Todos los <img> adyacentes a la clase "container"*/
}
```

- `Combinador general de hermanos` = Selecciona todos los elementos del selector de la derecha que son hermanos del selector de la izquierda. Estos selectores están separados por ~.
```
elemento ~ hermanos {
    /* Elementos hermanos */
}

div ~ p{
    /* Todos los <p> hermanos de <div>*/
}

.container ~ img{
    /* Todos los <img> hermanos de la clase "container"*/
}
```
> Hermanos significa que comparten el mismo padre y están situados hacia abajo de otro elemento. Por ejemplo, en el siguiente código, `<div> y <p>` son hermanos de `<h1>`, pero `<h1>` no es hermano de `<div> y <p>`.
```
<!--archivo HTML -->
<h1>Soy un título </h1>
<div>Soy un div</div>
<p>Soy un párrafo</p>
```



