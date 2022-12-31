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

## Pseudoclase y Pseudoelemento

> La diferencia entre uno y otro, ademas de que se usan para distintas cosas, es que las `Pseudoclases` de escriben solo con `:` mientras que los `Pseudoelementos` se escriben con `::`

### Pseudoclases
> La sintaxis de las Pseudoclases es la siguiente:
```
selector : pseudoclase { 
    propiedad: valor;
}
```

- `:hover` = Representa el estado en el cual el cursor está encima del elemento.
- `:active` = Representa el estado de un elemento que no ha sido visitado.
- `:visited` = Representa el estado de un elemento que ya ha sido visitado.
- `:not()` = Representa el estado en el cual no coinciden los selectores que se indiquen.
- `:nth-child()` = Representa el estado en el cual coinciden los hijos del elemento según el valor indicado.

### Pseudoelementos
> Y la sintaxis de los pseudo elementos es la siguiente:
```
selector :: pseudo-elemento { 
    propiedad: valor;
}
```

- `::before` = Sirve para agregar un contenido antes del elemento. El contenido es agregado mediante la propiedad content de CSS.
- `::after` = Sirve para agregar un contenido después del elemento. El contenido es agregado mediante la propiedad content de CSS.
- `::firt-letter` = Sirve para añadir estilos a a la primera letra del texto de cualquier elemento.

## Cascada y especificidad en CSS

> Hojas de estilos en cascada o CSS tiene ese nombre ya que se debe a la forma en que estilizamos los elementos de HTML, ya que al abrir las `{}` lo que hacemos es ir poniendo los estilos en uno debajo del otro

> Hay que tener en cuenta que a la hora de ir poniendo varios elementos que hagan referencia a lo mismo, los elementos que prevaleceran seran los que estan mas abajo, ya que los que estan abajo sobre escriben a los elementos que estan en la parte superior

> La especificidad consiste en dar un valor a una regla CSS sobre qué tan específico es el estilo, esto para que los navegadores puedan saber qué estilos aplicar sobre otros, independientemente de dónde se encuentren en el código. El estilo se aplicará donde la especificidad sea mayor.

### Tipos de especificidad

- `!important` = La palabra reservada !important es un valor de toda propiedad CSS que provee una especificidad de 10000, por lo que se aplicará ante otros estilos. Esto es una mala práctica y no deberías utilizarlo.
```
h1 {
    color: red !important;
}
```

- `estilos en linea` = Los estilos en línea son las propiedades CSS escritas en el HTML a través de la propiedad style de toda etiqueta. También es una mala práctica y debes evitarlo.
```
<h1 style="color: blue;">Especificidad</h1>
```

- `Especificidad en selectores` = Especificidad en selectores
El tema de los selectores ya lo conoces, por lo tanto, los selectores de tipo ID son más específicos que las clases, atributos y pseudoclases. Estas últimas son más específicas que los elementos y pseudoelementos. El selector universal tiene una especificidad de 0.

En un proyecto deberías evitar los !important y estilos en línea, para trabajar únicamente con la especificidad de los selectores. Sin embargo, debes tener presente que los selectores combinadores suman la especificidad de cada selector básico para obtener la especificidad total de la regla CSS.

*Ver imagen de referencie * 